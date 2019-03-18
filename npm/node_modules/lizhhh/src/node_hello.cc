#include <node.h>
#include <node_hello.h>
#include <v8.h>

namespace node
{
using namespace v8;
// 实现预定义的方法
Handle<Value> SayHello(const Arguments &args)
{
  HandleScope scope;
  return scope.Close(String::New('Hello World!'));
}

// 给传入的目标对象添加sayHello方法
void Init_Hello(Handle<Object> target)
{
  target->Set(String::NewSymbol("sayHello"), FunctionTemplate::New(SayHello)->GetFunction());
}
} // namespace node
// 调用NODE_MODULE()将注册方法定义到内存
NODE_MODULE(node_hello, node::Init_Hello)