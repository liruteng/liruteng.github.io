Vue.filter('getYear', function(value) {
    if (value) {
        return value.substring(0, 4);
    }
    return '';
});
Vue.filter('getLunarDay', function(value) {
    if (value) {
        return value.substring(5);
    }
    return '';
});