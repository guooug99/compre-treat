<template>
    <div class="inform-notice">
        <div class="rect5"></div>
        <div class="list">
            <ul class="list1">
            <li><a href="#">此处填写相关信息公告公示此处填写相关信息...</a></li>
            <li><a href="#">此处填写相关信息公告公示此处填写相关信息...</a></li>
            <li><a href="#">此处填写相关信息公告公示此处填写相关信息...</a></li>
            <li><a href="#">此处填写相关信息公告公示此处填写相关信息...</a></li>
            <li><a href="#">此处填写相关信息公告公示此处填写相关信息...</a></li>
            <li><a href="#">此处填写相关信息公告公示此处填写相关信息...</a></li>
            <li><a href="#">此处填写相关信息公告公示此处填写相关信息...</a></li>
        </ul>
        <ul class="list2">
            <li><a href="#">2019-07-04</a></li>
            <li><a href="#">2019-07-04</a></li>
            <li><a href="#">2019-07-04</a></li>
            <li><a href="#">2019-07-04</a></li>
            <li><a href="#">2019-07-04</a></li>
            <li><a href="#">2019-07-04</a></li>
            <li><a href="#">2019-07-04</a></li>
        </ul>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style>
.inform-notice {
    display: flex;
	flex-direction: column;
}
.rect5 {
  width: 100%;
  height: 3px;
  margin-top:17px;
  background-color: #e4e6ee;
}

.list {
    width: 100%;
    display: flex;
    justify-content: space-between;
}

.list1 {
  margin-top: 30px;
  margin-left: 15px;
  width: 294px;
  height: 280px;
}
.list1 li {
  width: 294px;
  height: 40px;
  list-style-type: none;
}

.list1 li a {
  text-decoration: none;
  font-family: SourceHanSansCN-Light;
  font-size: 14px;
  font-weight: normal;
  font-stretch: normal;
  letter-spacing: 0px;
  color: #111111;
}

.list2 {
  margin-top: 30px;
  margin-right: 0px;
  width: 85px;
  height: 280px;
}

.list2 li {
  width: 85px;
  height: 40px;
  list-style-type: none;
}

.list2 li a {
  text-decoration: none;
  font-family: SourceHanSansCN-Light;
  font-size: 14px;
  font-weight: normal;
  letter-spacing: 0px;
  color: #999999;
}

</style>