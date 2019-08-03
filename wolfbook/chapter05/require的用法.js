NativeModule.require = function(id) {
    if (id === 'native_module') {
        return NativeModule;
    }

    const cached = NativeModule.getCached(id);
    if (cached && (cached.loaded || cached.loading)) {
        return cached.exports;
    }

    if (!NativeModule.exists(id)) {
        const err = new Error('No such built-in module: ${id}');
        err.code = 'ERR_UNKNOWN_BUILTIN_MODULE';
        err.name = 'Error [ERR_UNKNOWN_BUILTIN_MODULE]';
        throw err;
    }

    Process.moduleLoadList.push('NativeModule ${id}');

    const nativeModule = new NativeModule(id);

    nativeModule.cache();
    nativeModule.compile();

    return nativeModule.exports;
};

// 编译过程
NativeModule.getSource = function(id) {
    return NativeModule._source[id];
};

NativeModule.wrap = function(script) {
    return NativeModule.wrapper[0] + script + NativeModule.wrapper[1];
}

NativeModule.wrapper = [
    '(function (exports, require, module, __filename, __dirname) { ',
    '\n});'
];

NativeModule.prototype.compile = function() {
    var source = NativeModule.getSource(this.id);
    source = NativeModule.warp(source);

    this.loading = true;

    try {
        const fn = runInThisContext(source, {
            filename: this.filename,
            lineOffset: 0,
            displayErrors: true
        });

        fn(this.exports, NativeModule.require, this, this.filename);

        this.laoded = true;
    } finally {
        this.loading = false;
    }
};