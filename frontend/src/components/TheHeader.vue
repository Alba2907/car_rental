<template>
  <div class="container">
    <div class="header">
    <div class="row">
      <div class="title col-1"><h1>Alba</h1></div>
      <div class="search col-10 ">
        <input class="search-input" placeholder="Search">
      </div>
      <div class="filter col-1">
        <div class="row">
          <div class="filter-icon col"><img src="../assets/filter.svg"></div>
          <div class="filter-name col">Filter</div>
        </div>

      </div>
    </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

