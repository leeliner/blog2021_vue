<template>
  <div class="mcontaner">

    <Header></Header>

    <div class="block">
      <el-timeline>

        <el-timeline-item :timestamp="blog.created" placement="top" v-for="blog in blogs">
          <el-card>
            <h4>
              <router-link :to="{name: 'BlogDetail', params: {blogId: blog.id}}">
                {{blog.title}}
              </router-link>
            </h4>
            <p>{{blog.description}}</p>
          </el-card>
        </el-timeline-item>

      </el-timeline>

      <el-pagination class="mpage"
                     background
                     layout="prev, pager, next"
                     :current-page="currentPage"
                     :page-size="pageSize"
                     :total="total"
                     @current-change=page>
      </el-pagination>

    </div>

  </div>
</template>

<script>
  import Header from "../components/Header";

  export default {
    name: "Blogs.vue",
    components: {Header},
    data() {
      return {
        blogs: {},
        currentPage: 1,
        total: 0,
        pageSize: 5
      }
    },
    methods: {
      page(currentPage) {
        const _this = this
        _this.$axios.get("/blogs?currentPage=" + currentPage).then(res => {
          console.log(res)
          _this.blogs = res.data.data.records
          _this.currentPage = res.data.data.current
          _this.total = res.data.data.total
          _this.pageSize = res.data.data.size

        })
      }
    },
    created() {
      this.page(1)
      /*setTimeout(() => {
        window.L2Dwidget.init({
          pluginRootPath: 'static/live2dw/',
          pluginJsPath: 'lib/',

          pluginModelPath: 'live2d-widget-model-haru_2/assets/',
          tagMode: false,
          debug: false,
          model: { jsonPath: 'static/live2dw/live2d-widget-model-haru_2/assets/haru02.model.json' },
          display: { position: 'right', width: 150, height: 300 },
          mobile: { show: true },
          log: false
        })
      }, 1000)*/
    }
  }
</script>

<!--<script>-->
<!--export default {-->
<!--  created() {-->
<!--    setTimeout(() => {-->
<!--      window.L2Dwidget.init({-->
<!--        pluginRootPath: 'static/live2dw/',-->
<!--        pluginJsPath: 'lib/',-->

<!--        pluginModelPath: 'live2d-widget-model-haru_2/assets/',-->
<!--        tagMode: false,-->
<!--        debug: false,-->
<!--        model: { jsonPath: 'static/live2dw/live2d-widget-model-haru_2/assets/haru02.model.json' },-->
<!--        display: { position: 'right', width: 150, height: 300 },-->
<!--        mobile: { show: true },-->
<!--        log: false-->
<!--      })-->
<!--    }, 1000)-->
<!--  },-->
<!--}-->
<!--</script>-->





<style scoped>

  .mpage {
    margin: 0 auto;
    text-align: center;
  }

</style>