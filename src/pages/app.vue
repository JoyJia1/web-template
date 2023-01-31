<template>
  <n-dialog-provider>
    <n-loading-bar-provider>
      <n-message-provider>
        <n-config-provider
          :locale="locale"
          :date-locale="dateZhCN"
          :theme-overrides="{ common: { fontWeightStrong: '600' } }"
        >
          <Container />
        </n-config-provider>
      </n-message-provider>
    </n-loading-bar-provider>
  </n-dialog-provider>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import {
  NDialogProvider,
  NLoadingBarProvider,
  NMessageProvider,
  NConfigProvider,
  zhCN,
  dateZhCN,
} from 'naive-ui'
import Container from './Container.vue'

export default defineComponent({
  components: {
    NDialogProvider,
    NLoadingBarProvider,
    NMessageProvider,
    NConfigProvider,
    Container,
  },
  setup() {
    return {
      locale: zhCN,
      dateZhCN,
    }
  }
})
</script>
