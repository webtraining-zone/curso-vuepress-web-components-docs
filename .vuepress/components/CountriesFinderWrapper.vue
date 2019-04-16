<template>
    <div class="web-component-wrapper">
        <h2>Example of Vue Component</h2>
        <input type="text" class="js-trigger" value="co">

        <div style="clear:both;"></div>
        <web-countries-finder keyword="co" class="js-target-countries"></web-countries-finder>
    </div>

</template>
<script>
  export default {
    name: 'CountriesFinderWrapper',
    data() {
      return {};
    },
    mounted() {
      // TODO: Use "native" Vue binding instead ;)
      (function() {
        var $input = document.querySelector('.js-trigger');
        var $countriesWebComponent = document.querySelector('.js-target-countries');

        $input.addEventListener('input', function() {
          console.log('keyword:', $input.value);

          $countriesWebComponent.keyword = $input.value;
        });
      })();
    },
  };
</script>
