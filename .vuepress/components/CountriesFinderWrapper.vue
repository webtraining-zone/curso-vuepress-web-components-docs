<template>
    <div class="web-component-wrapper">
        <h4>Example of web component loaded directly into a Vue component</h4>
        <input type="text" class="js-trigger" v-model="keyword">

        <web-countries-finder :keyword="keyword" class="js-target-countries"></web-countries-finder>
        <div style="clear:both;"></div>
    </div>

</template>
<script>
  export default {
    name: 'CountriesFinderWrapper',
    data() {
      return {
        keyword: 'co',
      };
    },
    mounted() {
      // TODO: Use "native" Vue binding instead ;)
      // (function() {
      //   var $input = document.querySelector('.js-trigger');
      //   var $countriesWebComponent = document.querySelector('.js-target-countries');
      //
      //   $input.addEventListener('input', function() {
      //     console.log('keyword:', $input.value);
      //
      //     $countriesWebComponent.keyword = $input.value;
      //   });
      // })();
    },
  };
</script>
