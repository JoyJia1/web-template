<template>
  <div class="wrapper">
    <n-space vertical>
      <n-space justify="space-between" align="center">
        <n-breadcrumb>
          <n-breadcrumb-item>一级菜单</n-breadcrumb-item>
          <n-breadcrumb-item>列表页</n-breadcrumb-item>
        </n-breadcrumb>
        <n-button
          strong
          secondary
          size="small"
          type="warning"
          @click="handleAction(0)"
        >
          <template #icon>
            <n-icon>
              <Plus />
            </n-icon>
          </template>
          新建
        </n-button>
      </n-space>
      <n-divider dashed style="margin-top: 0; margin-bottom: 10px" />
      <n-data-table
        striped
        :data="list"
        :columns="columns"
        :bordered="false"
        :loading="loading"
      />
      <n-space justify="end">
        <n-pagination
          v-model:page="current"
          v-model:page-size="pageSize"
          v-model:item-count="total"
        />
      </n-space>
    </n-space>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from "vue";
import {
  NSpace,
  NBreadcrumb,
  NBreadcrumbItem,
  NButton,
  NIcon,
  NDivider,
  NDataTable,
  NPagination,
} from "naive-ui";
import { Plus } from "@vicons/tabler";
import useProgressBar from "@uses/useProgressBar";
import useList from "./uses/useList";
import createColumns from "./createColumns";

export default defineComponent({
  components: {
    Plus,
    NSpace,
    NBreadcrumb,
    NBreadcrumbItem,
    NButton,
    NIcon,
    NDivider,
    NDataTable,
    NPagination,
  },

  setup() {
    const { data, current, total, pageSize, loading, run: runList } =
      useList(useProgressBar())

    const columns = createColumns(handleAction);
    const list = computed(() => data.value?.list || [])

    function handleAction(action: ActionType, row?: ListData) {
      switch (action) {
        case 0:
        case 1:
        case 2:
        case 3:
          break;
        case 4:
          break;
        case 5:
        case 6:
          break
      }
    }

    return {
      list,
      columns,
      loading,
      current,
      total,
      pageSize,
      handleAction,
    };
  },
});
</script>
