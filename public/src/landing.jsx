var vm = new Vue({
  el: '#app',
  data: {
    msg: 'Hello JSX'
  },
  methods: {
    hello () {
      alert('Hello Vue 2.0')
    }
  },
  render (h) {
    const data = {
      attrs: {
        id: 'hehe'
      },
      on: {
        click: () => {
          console.log('click')
        }
      },
      props: {
        innerHTML: 'hihihi'
      },
      hook: {
        insert: () => {
          console.log('insert')
        }
      }
    }
    return <div href="hoho" {...data}/>
    // return (
    //   <div id="hi">
    //     <span
    //       class={{ a: true, b: true }}
    //       style={{fontSize: '15px'}}
    //       on-click={this.hello}
    //       {...data}>
    //       {this.msg}
    //     </span>
    //   </div>
    // )
  }
})

Vue.component('q-type-percentage', {
  render (h) {
    return (
      <div class="card question-card">
        <div class="card-block">
          <h4 class="card-title">{{ statement.title }}</h4>
        </div>
        <div class="card-text">
          <span class="pull-left">0%</span>
          <output id="rangevalue">50</output>
          <span class="pull-right">100%</span>
          <div class="clearfix"></div>
          <input type="range" id="response-" name="response[]" value="100">
        </div>
        <div class="btn-group" role="group" aria-label="Basic example">
          <button class="btn btn-md btn-default col-2">Previous</button>
          <button class="btn btn-md btn-primary col-10">Next</button>
        </div>
      </div>
    )
  }
});

Vue.component('q-type-quick', {
  render (h) {
    return (
      <div class="card question-card">
        <div class="card-block">
          <h4 class="card-title">{{ statement.title }}</h4>
        </div>
        <div class="list-group list-group-flush">
          <label class="list-group-item"><input type="radio" name="response[]" value="1"> Yes</label>
          <label class="list-group-item"><input type="radio" name="response[]" value="0"> No</label>
          <label class="list-group-item"><input type="radio" name="response[]" value="2"> I don't know</label>
        </div>
        <div class="btn-group" role="group">
          <button class="btn btn-md btn-default col-2">Previous</button>
          <button class="btn btn-md btn-primary col-10">Next</button>
        </div>
      </div>
    )
  }
});


Vue.component('landing', {
  render (h) {
    return (
      <div class="jumbotron start-page">
        <h1 class="display-3">Survey title!</h1>
        <p class="lead">Survey subtitle. For example purpose of the survey or just welcome text.</p>
        <hr class="my-4">
        <button type="" class="btn btn-outline-success btn-lg">Begin</button>
      </div>
    )
  }
});

Vue.component('pagination', {
  render (h) {
    return (
        <footer class="footer">
          <div class="container">
            <nav>
              <ul class="pagination">
                <li class="page-item"><a class="page-link" href="#">Previous</a></li>
                <li class="page-item"><a class="page-link" href="#">1</a></li>
                <li class="page-item"><a class="page-link" href="#">2</a></li>
                <li class="page-item"><a class="page-link" href="#">3</a></li>
                <li class="page-item"><a class="page-link" href="#">Next</a></li>
              </ul>
            </nav>
          </div>
        </footer>
    )
  }
});
