document.addEventListener('DOMContentLoaded', _ => {
    const conv = 1000 * 60 * 60 * 24;
    const diff = new Date('2018-12-25') - Date.now();
    document.getElementById('count').innerHTML = `${Math.ceil(diff/conv)} days`;
});
