<template onload="line">
  <div class="block">
    <el-date-picker v-model="value1" type="date" placeholder="" @change="showmeet(value1)">
    </el-date-picker>
    <!--<table border="" cellspacing="0">
            <tr>
                <td rowspan="2" width="120">会议室</td>
                <td colspan="17">会议时间</td>
            </tr>
            <tr>
                <td>09:30-10:00</td>
                <td>10:00-10:30</td>
                <td>10:30-11:00</td>
                <td>11:00-11:30</td>
                <td>11:30-12:00</td>
                <td>12:00-12:30</td>
                <td>12:30-13:00</td>
                <td>13:00-13:30</td>
                <td>13:30-14:00</td>
                <td>14:00-14:30</td>
                <td>14:30-15:00</td>
                <td>15:00-15:30</td>
                <td>15:30-16:00</td>
                <td>16:00-16:30</td>
                <td>16:30-17:00</td>
                <td>17:00-17:30</td>
                <td>17:30-18:00</td>
                </tr>
                <tr v-for="li in list" :key="li.roomid" >
                    <td>{{li.roomid}} <el-button type="primary" size="mini" @click="newm(li.roomid,value1)">预定</el-button></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td bgcolor=""></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
        </table>-->
    <el-table :data="tableData.list" :cell-class-name="setColor" style="width: 1270px">
      <el-table-column prop="roomid" label="会议室" width="100">
      </el-table-column>
      <el-table-column label="会议时间">
        <el-table-column prop="this.times.start" label="09:30-10:00" width="65">
        </el-table-column>
        <el-table-column prop="province" label="10:00-10:30" width="65">
        </el-table-column>
        <el-table-column prop="" label="10:30-11:00" width="65">
        </el-table-column>
        <el-table-column prop="" label="11:00-11:30" width="65">
        </el-table-column>
        <el-table-column prop="zip" label="11:30-12:00" width="65">
        </el-table-column>
        <el-table-column prop="zip" label="12:00-12:30" width="65">
        </el-table-column>
        <el-table-column prop="zip" label="12:30-13:00-" width="65">
        </el-table-column>
        <el-table-column prop="zip" label="13:00-13:30" width="65">
        </el-table-column>
        <el-table-column prop="zip" label="13:30-14:00" width="65">
        </el-table-column>
        <el-table-column prop="zip" label="14:00-14:30" width="65">
        </el-table-column>
        <el-table-column prop="zip" label="14:30-15:00" width="65">
        </el-table-column>
        <el-table-column prop="zip" label="15:00-15:30" width="65">
        </el-table-column>
        <el-table-column prop="zip" label="15:30-16:00" width="65">
        </el-table-column>
        <el-table-column prop="zip" label="16:00-16:30" width="65">
        </el-table-column>
        <el-table-column prop="zip" label="16:30-17:00" width="65">
        </el-table-column>
        <el-table-column prop="zip" label="17:00-17:30" width="65">
        </el-table-column>
        <el-table-column prop="zip" label="17:30-18:00" width="65">
        </el-table-column>
        <el-table-column label="操作" width="65">
          <template slot-scope="scope">
            <el-button size="mini" type="primary" @click="handleEdit(scope.row, value1)">预定</el-button>
          </template>
        </el-table-column>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import axios from "axios";
export default {
  methods: {
    setColor() {
      //       for (const element of this.tableData.times) {
      //         if (element.roomid == row.roomid) {
      //           console.log;
      //           if (columnIndex >= element.start && columnIndex <= element.end) {
      //             return "hasColor";
      //           }
      //         }
      //       }
    },
    showmeet: function (value1) {
      var self = this;
      value1 = this.formatDate(value1);
      axios
        .get("http://localhost:8081/meet", { params: { date: value1 } })
        .then(function (response) {
          self.tableData.times = response.data.returnData;
          console.log(response.data.returnData);
        })
        .catch(function (error) {
          console.log(error);
        });
    },
    formatDate: function (date) {
      var y = date.getFullYear();
      var m = date.getMonth() + 1;
      m = m < 10 ? "0" + m : m;
      var d = date.getDate();
      d = d < 10 ? "0" + d : d;
      return y + "-" + m + "-" + d;
    },
    newm: function (id, value) {
      value = this.formatDate(value);
      localStorage.setItem("roomid", id);
      localStorage.setItem("meetingdate", value);
      localStorage.setItem("uname", this.$route.params.acc);
      this.$router.push("/yuyue");
    },
    getdatatime: function () {
      var self = this;
      this.value1 = new Date();
      var value3 = this.formatDate(this.value1);
      axios
        .get("http://localhost:8081/meet", { params: { date: value3 } })
        .then(function (response) {
          self.tableData.times = response.data.returnData;
          console.log(response.data.returnData);
        })
        .catch(function (error) {
          console.log(error);
        });
    },
    handleEdit(row, value) {
      value = this.formatDate(value);
      localStorage.setItem("roomid", row.roomid);
      localStorage.setItem("meetingdate", value);
      localStorage.setItem("uname", this.$route.params.acc);
      this.$router.push("/yuyue");
      console.log(row.roomid);
    },
    getList: function () {
      var self = this;
      axios
        .get("http://localhost:8081/roomid")
        .then(function (response) {
          self.tableData.list = response.data.returnData;
          console.log(self.tableData.list);
        })
        .catch(function (error) {
          console.log(error);
        });
    },
  },
  mounted() {
    //     this.getList();
    //     this.getdatatime();
  },
  data() {
    return {
      color: "aqua",
      value1: "",
      dataPicker: this.formatDate(new Date()),
      tableData: {
        list: [
          {
            id: 1,
            roomid: "501",
          },
          {
            id: 2,
            roomid: "502",
          },
          {
            id: 3,
            roomid: "503",
          },
          {
            id: 4,
            roomid: "504",
          },
          {
            id: 5,
            roomid: "505",
          },
          {
            id: 6,
            roomid: "506",
          },
        ],
        times: [
          {
            roomid: "501",
            meetingdate: null,
            start: "8",
            end: "9",
            username: null,
            phone: null,
            mail: null,
            des: null,
            cause: null,
            lx: null,
            zq: null,
            uname: null,
          },
          {
            roomid: "505",
            meetingdate: null,
            start: "4",
            end: "10",
            username: null,
            phone: null,
            mail: null,
            des: null,
            cause: null,
            lx: null,
            zq: null,
            uname: null,
          },
        ],
      },
    };
  },
};
</script>

<style lang="scss" scoped>
/deep/ .hasColor {
  background: pink !important;
}
.el-table .warning-row {
  background: oldlace;
}

.el-table .success-row {
  background: #f0f9eb;
}
table,
table td {
  border: 1px solid #acadb3;
}
</style>
