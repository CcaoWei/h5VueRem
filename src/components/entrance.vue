<template>
  <div>
    <el-form v-if="langData" ref="ruleForm" label-width="100px" class="demo-ruleForm">
      <el-form-item label="业务坐标轴">
        <el-row>
          <el-col :span="8" v-for="(item,index) in langData.data.panels" :key="index">
            <el-button @click="setP(item.id)" type="primary">{{item.name}}</el-button>
          </el-col>
        </el-row>
      </el-form-item>

      <el-form-item label="业务指标">
        <div v-for="(item,index) in langData.data.panels" :key="index">
          <el-select v-if="selected == item.id" v-model="models[index]" value-key="row_id" multiple placeholder="请选择">

            <el-option v-for="mmm in item.labels" :key="mmm.row_id" :label="mmm.name" :value="mmm">
            </el-option>
          </el-select>
        </div>

      </el-form-item>
      <el-form-item label="已选泽指标">
        <div v-for="(panels,index) in langData.data.panels" :key="index">
          <div v-if="models">
            <span v-for="(tag,i) in models" :key="i">
              <div v-if=" tag && tag.length > 0&&index ==i">
                <div>{{panels.name}}</div>
                <el-tag v-for="(tagyy,m) in tag" :key="m" closable :type="tagyy.row_id" @close="delectEv(tagyy.row_id,index,i,m)">
                  {{tagyy.name}}
                </el-tag>
              </div>

            </span>
          </div>

        </div>
      </el-form-item>
    </el-form>
    <el-button type="primary" @click="showDetail">查看详情</el-button>
  </div>

</template>
<script>
export default {
  data() {
    return {
      props: { multiple: true, value: "row_id", label: "name" },
      selected: "",
      langData: null,
      sortData: {},
      models: null,
      modelsHuixian: null,
    };
  },
  methods: {
    showDetail() {
      this.sortData = {
        code: 0,
        message: "",
        data: {
          id: 95,
          refPanelId: 2,
          userId: "guodx",
          title: "更新测试3232",
          groupColumn: "province",
          groupColumnName: "按省直单位",
          panels: [
            {
              labels: [{ row_id: "replaceTarget", name: "替代目标数" }],
              panelId: "devices",
              panelName: "设备数据",
            },
            {
              panelId: "application",
              panelName: "应用数据",
              labels: [{ row_id: "amount", name: "接入应用数" }],
            },
          ],
          granularity: 1,
          granularityName: "日",
          chartType: "line",
          chartTypeName: "折线图",
          sort: "no",
          sortName: "不排序",
          content: {
            chartName: "更新测试3232",
            nameList: ["坐标1", "坐标2"],
            valueList: [
              { data: ["10", "20"], name: "指标1", type: "line" },
              { data: ["40", "30"], name: "指标2", type: "line" },
            ],
          },
          startDate: 0,
          endDate: 0,
          createTime: "2020-10-13 13:48:44",
          isDeleted: 0,
        },
      };

      for (const iterator in this.sortData.data.panels) {
        this.models[iterator] = new Array();

        if (this.sortData.data.panels[iterator].labels) {
          for (const lang of this.langData.data.panels) {
            if (lang.id == this.sortData.data.panels[iterator].panelId) {
              this.models[iterator] = this.$set(
                this.models,
                iterator,
                this.sortData.data.panels[iterator].labels
              );
            }
          }
        }
      }
    },
    setP(id) {
      this.selected = id;
    },
    delectEv(id, index, i, m) {
      this.models[index] = this.$set(
        this.models,
        index,
        this.models[index].slice(0, m)
      );
    },
  },
  mounted() {
    this.langData = {
      code: 0,
      message: "",
      data: {
        panels: [
          {
            id: "devices",
            name: "设备数据",
            labels: [
              { row_id: "replaceTarget", name: "替代目标数" },
              { row_id: "replace_amount", name: "替代设备数" },
              { row_id: "replace_rate", name: "替代率" },
              { row_id: "amount", name: "使用设备数" },
              { row_id: "use_rate", name: "使用率" },
              { row_id: "error", name: "设备故障类型" },
            ],
          },
          {
            id: "service",
            name: "服务数据",
            labels: [
              { row_id: "amount", name: "服务总数" },
              { row_id: "solved", name: "服务解决率" },
            ],
          },
          {
            id: "application",
            name: "应用数据",
            labels: [
              { row_id: "amount", name: "接入应用数" },
              { row_id: "warning", name: "应用报警数" },
            ],
          },
        ],
        groupColumn: [
          { row_id: "province", name: "按省直单位" },
          { row_id: "city", name: "按地市州" },
          { row_id: "time", name: "按时间趋势" },
          { row_id: "supply", name: "按设备供应商" },
          { row_id: "type", name: "按设备类型" },
        ],
        char_types: [
          { id: "bar", name: "条形图" },
          { id: "line", name: "折线图" },
          { id: "pie", name: "饼状图" },
        ],
        granularity: [
          { id: "1", name: "日" },
          { id: "2", name: "周" },
          { id: "3", name: "月" },
          { id: "4", name: "年" },
        ],
        sort: [
          { id: "no", name: "不排行" },
          { id: "asc", name: "从低到高" },
          { id: "desc", name: "从高到低" },
        ],
      },
    };

    this.selected = this.langData.data.panels[0].id;
    this.models = Array(this.langData.data.panels.length); //重要
  },
};
</script>


<style lang="scss" scoped>
.demo-ruleForm {
  margin: 40px auto 0;
}
.my-exchange {
  height: 100%;
  .exchange-item {
    width: 100%;
    padding: 2rem 2rem 0 2rem;
    box-sizing: border-box;
    margin-top: 1rem;
    box-shadow: 0 0 30px 0 rgba(52, 84, 122, 0.08);
    .item-info {
      display: flex;
      justify-content: flex-start;
      align-items: center;
      border-bottom: 1px solid #e2e8f7;
      padding-bottom: 2rem;
      .item-img {
        background: #ebeff9;
        border-radius: 1rem;
        margin-right: 1rem;
        width: 8rem;
        height: 8rem;
      }
      .name-box {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: flex-start;
        .item-name {
          opacity: 0.9;
          font-family: PingFangSC-Medium;
          font-size: 1.6rem;
          color: #1f314a;
          letter-spacing: 0;
          margin-bottom: 1.25rem;
        }
        .item-exchange {
          display: flex;
          justify-content: flex-start;
          align-items: center;
          .exchange-icon {
            margin-right: 0.5rem;
            width: 2rem;
            height: 2rem;
          }
          .number {
            opacity: 0.9;
            font-family: PingFangSC-Regular;
            font-size: 1.4rem;
            color: #78879c;
            letter-spacing: 0;
          }
        }
      }
    }
    .item-date-box {
      height: 5.45rem;
      display: flex;
      justify-content: space-between;
      align-items: center;
      .date-text {
        opacity: 0.9;
        font-family: PingFangSC-Regular;
        font-size: 1.4rem;
        color: #78879c;
        letter-spacing: 0;
        line-height: 1.4rem;
      }
      .states {
        opacity: 0.9;
        font-family: PingFangSC-Regular;
        font-size: 1.4rem;
        color: #78879c;
        letter-spacing: 0;
        text-align: right;
        line-height: 1.4rem;
      }
    }
  }
}
</style>
