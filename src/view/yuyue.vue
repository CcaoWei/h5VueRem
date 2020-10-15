<template>
  <el-container>
    <el-table :data="data1" :cell-class-name="ccc" style="width: 100%">

      <el-table-column prop="roomid" label="会议室">
      </el-table-column>
      <el-table-column prop="start" label="start">
      </el-table-column>
      <el-table-column prop="end" label="end">
      </el-table-column>
      <el-table-column prop="end" label="end">
      </el-table-column>
      <el-table-column prop="end" label="end">
      </el-table-column>
      <el-table-column prop="end" label="end">
      </el-table-column>
      <el-table-column prop="end" label="end">
      </el-table-column>
      <el-table-column prop="end" label="end">
      </el-table-column>
      <el-table-column prop="end" label="end">
      </el-table-column>
      <el-table-column prop="end" label="end">
      </el-table-column>
      <el-table-column prop="end" label="end">
      </el-table-column>
      <el-table-column prop="end" label="end">
      </el-table-column>
      <el-table-column prop="end" label="end">
      </el-table-column>
      <el-table-column prop="end" label="end">
      </el-table-column>
      <el-table-column prop="end" label="end">
      </el-table-column>
      <el-table-column prop="end" label="end">
      </el-table-column>
      <el-table-column prop="end" label="end">
      </el-table-column>
      <el-table-column prop="end" label="end">
      </el-table-column>
      <el-table-column prop="end" label="end">
      </el-table-column>
      <el-table-column prop="end" label="end">
      </el-table-column>
      <el-table-column prop="end" label="end">
      </el-table-column>
      <el-table-column prop="end" label="end">
      </el-table-column>
      <el-table-column prop="end" label="end">
      </el-table-column>
    </el-table>
  </el-container>
</template>

<script>
// import axios from "axios";

export default {
  name: "Yuyue",
  data() {
    return {
      value1: "",
      data1: [
        {
          roomid: "501",
          meetingdate: null,
          start: "13",
          end: "18",
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
          roomid: "502",
          meetingdate: null,
          start: "2",
          end: "6",
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
          roomid: "502",
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
      ],
      form: {
        roomid: "",
        meetingdate: "",
        start: "",
        end: "",
        username: "",
        phone: "",
        mail: "",
        lx: "1",
        zq: "1",
        cause: "",
        des: "",
        uname: "",
      },
    };
  },
  methods: {
    ccc({ row, column, rowIndex, columnIndex }) {
      console.log(row);
      console.log(rowIndex);
      console.log(column);
      console.log(columnIndex);
      if (columnIndex >= row.start && columnIndex <= row.end) {
        return "hasColor";
      }
    },
    submitForm(form) {
      console.log(form);
      if (this.form.start === "09:30") {
        this.form.start = "1";
      }
      if (this.form.start === "10:00") {
        this.form.start = "2";
      }
      if (this.form.start === "10:30") {
        this.form.start = "3";
      }
      if (this.form.start === "11:00") {
        this.form.start = "4";
      }
      if (this.form.start === "11:30") {
        this.form.start = "5";
      }
      if (this.form.start === "12:00") {
        this.form.start = "6";
      }
      if (this.form.start === "12:30") {
        this.form.start = "7";
      }
      if (this.form.start === "13:00") {
        this.form.start = "8";
      }
      if (this.form.start === "13:30") {
        this.form.start = "9";
      }
      if (this.form.start === "14:00") {
        this.form.start = "10";
      }
      if (this.form.start === "14:30") {
        this.form.start = "11";
      }
      if (this.form.start === "15:00") {
        this.form.start = "12";
      }
      if (this.form.start === "15:30") {
        this.form.start = "13";
      }
      if (this.form.start === "16:00") {
        this.form.start = "14";
      }
      if (this.form.start === "16:30") {
        this.form.start = "15";
      }
      if (this.form.start === "17:00") {
        this.form.start = "16";
      }
      if (this.form.start === "17:30") {
        this.form.start = "17";
      }
      if (this.form.start === "18:00") {
        this.form.start = "18";
      }
      if (this.form.end === "09:30") {
        this.form.end = "1";
      }
      if (this.form.end === "10:00") {
        this.form.end = "2";
      }
      if (this.form.end === "10:30") {
        this.form.end = "3";
      }
      if (this.form.end === "11:00") {
        this.form.end = "4";
      }
      if (this.form.end === "11:30") {
        this.form.end = "5";
      }
      if (this.form.end === "12:00") {
        this.form.end = "6";
      }
      if (this.form.end === "12:30") {
        this.form.end = "7";
      }
      if (this.form.end === "13:00") {
        this.form.end = "8";
      }
      if (this.form.end === "13:30") {
        this.form.end = "9";
      }
      if (this.form.end === "14:00") {
        this.form.end = "10";
      }
      if (this.form.end === "14:30") {
        this.form.end = "11";
      }
      if (this.form.end === "15:00") {
        this.form.end = "12";
      }
      if (this.form.end === "15:30") {
        this.form.end = "13";
      }
      if (this.form.end === "16:00") {
        this.form.end = "14";
      }
      if (this.form.end === "16:30") {
        this.form.end = "15";
      }
      if (this.form.end === "17:00") {
        this.form.end = "16";
      }
      if (this.form.end === "17:30") {
        this.form.end = "17";
      }
      if (this.form.end === "18:00") {
        this.form.end = "18";
      }
      //   axios({
      //     url: "@/view/aaa.js",
      //     method: "post",
      //     headers: { "Content-Type": "application/x-www-form-urlencoded" },
      //     params: {
      //       roomid: this.form.roomid,
      //       meetingdate: this.form.meetingdate,
      //       start: this.form.start,
      //       end: this.form.end,
      //       username: this.form.username,
      //       phone: this.form.phone,
      //       mail: this.form.mail,
      //       lx: this.form.lx,
      //       zq: this.form.zq,
      //       cause: this.form.cause,
      //       des: this.form.des,
      //       uname: this.form.uname,
      //     },
      //   })
      //     .then((response) => {
      //       if (response.data.returnData) {
      //         this.$message({
      //           message: "预约成功",
      //           type: "success",
      //           duration: 1000,
      //         });
      //         this.$router.push("/about/" + localStorage.getItem("uname"));
      //       } else {
      //         this.$alert(response.data.message, "预约失败", {
      //           confirmButtonText: "确定",
      //         });
      //       }
      //     })
      //     .catch(function (error) {
      //       console.log(error);
      //     });
    },
    getRoomid: function () {
      this.form.roomid = localStorage.getItem("roomid");
      this.form.meetingdate = localStorage.getItem("meetingdate");
      this.form.uname = localStorage.getItem("uname");
    },
    getuser: function () {
      var self = this;
      var uname = localStorage.getItem("uname");
      console.log(uname);
      //   axios
      //     .get("@/view/ccc.js", { params: { name: uname } })
      //     .then(function (response) {
      //       console.log(response);
      self.form.username = this.data1.uname;
      self.form.mail = this.data1.account;
      self.form.phone = this.data1.phone;
      //     })
      //     .catch(function (error) {
      //       console.log(error);
      //     });
    },
  },
  mounted() {
    this.getuser();
    this.getRoomid();
  },
};
</script>

<style lang="scss" scoped>
/deep/ .hasColor {
  background: pink !important;
}
.el-container {
  margin: 0 auto;
  width: 1000px;
}
.el-header {
  background-color: #acadb3;
  color: #333;
  text-align: left;
  line-height: 60px;
}
.el-main {
  background-color: #f2f4f5;
  color: #333;
  line-height: 30px;
}
</style>
