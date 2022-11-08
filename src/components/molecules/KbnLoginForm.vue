<template>
  <form novalidate>
    <div class="form-item">
      <label for="userId">사용자 ID</label>
      <input
        id="userId"
        v-model="userId"
        type="text"
        autocomplete="off"
        placeholder="INSOFT1"
        @focus="resetError">
      <ul class="validation-errors">
        <li v-if="!validation.userId.required">사용자 ID를 입력해 주세요.</li>
      </ul>
    </div>
    <div class="form-item">
      <label for="passowrd">비밀번호</label>
      <input
        id="userPassword"
        v-model="userPassword"
        type="password"
        autocomplete="off"
        placeholder="InSOFT1!@#$"
        @focus="resetError">
      <ul class="validation-errors">
        <li v-if="!validation.userPassword.required">비밀번호를 입력해 주세요.</li>
      </ul>
    </div>
    <div class="form-actions">
      <KbnButton
        :disabled="disableLoginAction"
        @click="handleClick"
      >
        로그인
      </KbnButton>
      <p
        v-if="progress"
        class="login-progress"
      >
        로그인 중...
      </p>
      <p
        v-if="error"
        class="login-error"
      >
        {{ error }}
      </p>
    </div>
  </form>
</template>

<script>
// KbnButton 가져오기
import KbnButton from '@/components/atoms/KbnButton.vue'
// 이메일 주소형식 확인 정규식
// const REGEX_EMAIL = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
const required = val => !!val.trim()

export default {
  name: 'KbnLoginForm',

  components: {
    KbnButton
  },

  props: {
    onlogin: {
      type: Function,
      required: true
    }
  },

  data () {
    return {
      userId: '',
      userPassword: '',
      progress: false,
      error: ''
    }
  },

  computed: {
    validation () { // email, userPassword 유효성검사
      return {
        userId: {
          // required: required(this.email),
          // format: REGEX_EMAIL.test(this.email)
          required: required(this.userId)
        },
        userPassword: {
          required: required(this.userPassword)
        }
      }
    },

    valid () {
      const validation = this.validation // 위에서 정의한 유효성 검사를 통해 가능한지 리턴
      const fields = Object.keys(validation)
      let valid = true
      for (let i = 0; i < fields.length; i++) {
        const field = fields[i]
        valid = Object.keys(validation[field])
          .every(key => validation[field][key])
        if (!valid) { break }
      }
      return valid
    },

    disableLoginAction () { // valid를 사용하여 로그인처리 여부 or 진행중
      return !this.valid || this.progress
    }
  },

  methods: {
    resetError () {
      this.error = ''
    },

    handleClick (ev) {
      // if (this.disableLoginAction) { return } // 로그인 처리 안되도록

      this.progress = true // 로그인 처리 프로그레스(진행중)
      this.error = ''

      this.$nextTick(() => {
        this.onlogin({ userId: this.userId, userPassword: this.userPassword })
          .catch(err => {
            this.error = err.message
          })
          .then(() => {
            this.progress = false
          })
      })
    }
  }
}
</script>

<style scoped>
form {
  display: block;
  margin: 0 auto;
  text-align: left;
}
label {
  display: block;
}
input {
  width: 100%;
  padding: .5em;
  font: inherit;
}
ul {
  list-style-type: none;
  padding: 0;
  margin: 0.25em 0;
}
ul li {
  font-size: 0.5em;
}
.validation-errors {
  height: 32px;
}
.form-actions p {
  font-size: 0.5em;
}
</style>
