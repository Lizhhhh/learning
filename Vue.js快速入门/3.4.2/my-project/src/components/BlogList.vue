<template>
  <div>
    <my-logo :title="title"></my-logo>
    <input
      type='button'
      @click='change_title'
      value='点击修改标题'
    /> <br />
    <table>
      <tr
        v-for="blog in blogs"
        :key="blog.id"
      >
        <td>
          <router-link :to="{name: 'Blog', query: {id:blog.id}}">{{blog}}</router-link>
        </td>
      </tr>
    </table>
  </div>
</template>

<script>
import MyLogo from '@/components/Logo'
export default {
  components: {
    MyLogo: MyLogo
  },
  data () {
    return {
      title: '博客列表页',
      blogs: []
    }
  },
  mounted () {
    this.$http.get('api/interface/blogs/all', { title: '', blog_body: '' }).then((response) => {
      console.info(response.body)
      this.blogs = response.body.blogs
    }, (response) => {
      console.log(response)
    })
  },
  methods: {
    show_blog: function (blogId) {
      this.$router.push({ name: 'Blog', query: { id: blogId } })
    },
    change_title: function () {
      if (this.title === '好多文章') {
        this.title = '博客列表'
      } else {
        this.title = '好多文章'
      }
    }
  }
}
</script>
<style>
td {
  border-bottom: 1px solid grey;
}
div {
  text-align: center;
}
</style>
