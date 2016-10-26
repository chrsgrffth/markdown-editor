<script>

export default {
  name: 'Home',

  data () {
    return {
      title: 'Vue App'
    }
  },

  methods: {
    edit: function(e) {
      var target = e.currentTarget;

      target.contentEditable = true;

      target.addEventListener('keyup', () => {
        this.title = target.textContent;
      });
    }

  }

}

</script>

<template>

  <main class="py-6">
    <div class="container">
      <div class="col-md-8 push-md-2">
        <div class="markdown">
          <h1 @click="edit">{{ title }}</h1>
        </div>
      </div>
    </div>
    <div class="container">
      <div class="col-md-8 push-md-2">
        <pre class="cbgg-8 d-block">
        {
          title: '{{ title }}'
        }
        </pre>
      </div>
    </div>
  </main>

</template>