<template>
  <ContentWrap>
    <!-- 搜索工作栏 -->
    <el-form
      class="-mb-15px"
      :model="queryParams"
      ref="queryFormRef"
      :inline="true"
      label-width="68px"
    >
      <el-form-item label="用户资产账户ID" prop="accountId">
        <el-input
          v-model="queryParams.accountId"
          placeholder="请输入用户资产账户ID"
          clearable
          @keyup.enter="handleQuery"
          class="!w-240px"
        />
      </el-form-item>
      <el-form-item label="资产来源ID" prop="sourceId">
        <el-input
          v-model="queryParams.sourceId"
          placeholder="请输入资产来源ID"
          clearable
          @keyup.enter="handleQuery"
          class="!w-240px"
        />
      </el-form-item>
      <el-form-item label="用户编号" prop="userId">
        <el-input
          v-model="queryParams.userId"
          placeholder="请输入用户编号"
          clearable
          @keyup.enter="handleQuery"
          class="!w-240px"
        />
      </el-form-item>
      <el-form-item label="资产定义ID" prop="assetId">
        <el-input
          v-model="queryParams.assetId"
          placeholder="请输入资产定义ID"
          clearable
          @keyup.enter="handleQuery"
          class="!w-240px"
        />
      </el-form-item>
      <el-form-item label="使用流水号" prop="usageNo">
        <el-input
          v-model="queryParams.usageNo"
          placeholder="请输入使用流水号"
          clearable
          @keyup.enter="handleQuery"
          class="!w-240px"
        />
      </el-form-item>
      <el-form-item label="使用类型：1消费 2激活 3预约 4核销 5取消 6回退" prop="usageType">
        <el-select
          v-model="queryParams.usageType"
          placeholder="请选择使用类型：1消费 2激活 3预约 4核销 5取消 6回退"
          clearable
          class="!w-240px"
        >
          <el-option label="请选择字典生成" value="" />
        </el-select>
      </el-form-item>
      <el-form-item label="本次消耗数量" prop="consumeQuantity">
        <el-input
          v-model="queryParams.consumeQuantity"
          placeholder="请输入本次消耗数量"
          clearable
          @keyup.enter="handleQuery"
          class="!w-240px"
        />
      </el-form-item>
      <el-form-item label="业务类型：1报告任务 2课程开通 3课程学习 4咨询预约 5后台" prop="bizType">
        <el-select
          v-model="queryParams.bizType"
          placeholder="请选择业务类型：1报告任务 2课程开通 3课程学习 4咨询预约 5后台"
          clearable
          class="!w-240px"
        >
          <el-option label="请选择字典生成" value="" />
        </el-select>
      </el-form-item>
      <el-form-item label="业务ID" prop="bizId">
        <el-input
          v-model="queryParams.bizId"
          placeholder="请输入业务ID"
          clearable
          @keyup.enter="handleQuery"
          class="!w-240px"
        />
      </el-form-item>
      <el-form-item label="业务单号" prop="bizNo">
        <el-input
          v-model="queryParams.bizNo"
          placeholder="请输入业务单号"
          clearable
          @keyup.enter="handleQuery"
          class="!w-240px"
        />
      </el-form-item>
      <el-form-item label="状态：1待处理 2处理中 3成功 4取消 5失败" prop="status">
        <el-select
          v-model="queryParams.status"
          placeholder="请选择状态：1待处理 2处理中 3成功 4取消 5失败"
          clearable
          class="!w-240px"
        >
          <el-option label="请选择字典生成" value="" />
        </el-select>
      </el-form-item>
      <el-form-item label="预约/计划时间" prop="scheduledTime">
        <el-date-picker
          v-model="queryParams.scheduledTime"
          value-format="YYYY-MM-DD HH:mm:ss"
          type="daterange"
          start-placeholder="开始日期"
          end-placeholder="结束日期"
          :default-time="[new Date('1 00:00:00'), new Date('1 23:59:59')]"
          class="!w-220px"
        />
      </el-form-item>
      <el-form-item label="实际使用时间" prop="usedTime">
        <el-date-picker
          v-model="queryParams.usedTime"
          value-format="YYYY-MM-DD HH:mm:ss"
          type="daterange"
          start-placeholder="开始日期"
          end-placeholder="结束日期"
          :default-time="[new Date('1 00:00:00'), new Date('1 23:59:59')]"
          class="!w-220px"
        />
      </el-form-item>
      <el-form-item label="完成时间" prop="finishTime">
        <el-date-picker
          v-model="queryParams.finishTime"
          value-format="YYYY-MM-DD HH:mm:ss"
          type="daterange"
          start-placeholder="开始日期"
          end-placeholder="结束日期"
          :default-time="[new Date('1 00:00:00'), new Date('1 23:59:59')]"
          class="!w-220px"
        />
      </el-form-item>
      <el-form-item label="备注" prop="remark">
        <el-input
          v-model="queryParams.remark"
          placeholder="请输入备注"
          clearable
          @keyup.enter="handleQuery"
          class="!w-240px"
        />
      </el-form-item>
      <el-form-item label="创建时间" prop="createtime">
        <el-date-picker
          v-model="queryParams.createtime"
          value-format="YYYY-MM-DD HH:mm:ss"
          type="daterange"
          start-placeholder="开始日期"
          end-placeholder="结束日期"
          :default-time="[new Date('1 00:00:00'), new Date('1 23:59:59')]"
          class="!w-220px"
        />
      </el-form-item>
      <el-form-item label="更新时间" prop="updatetime">
        <el-date-picker
          v-model="queryParams.updatetime"
          value-format="YYYY-MM-DD HH:mm:ss"
          type="daterange"
          start-placeholder="开始日期"
          end-placeholder="结束日期"
          :default-time="[new Date('1 00:00:00'), new Date('1 23:59:59')]"
          class="!w-220px"
        />
      </el-form-item>
      <el-form-item label="租户编号" prop="tenantid">
        <el-input
          v-model="queryParams.tenantid"
          placeholder="请输入租户编号"
          clearable
          @keyup.enter="handleQuery"
          class="!w-240px"
        />
      </el-form-item>
      <el-form-item>
        <el-button @click="handleQuery"><Icon icon="ep:search" class="mr-5px" /> 搜索</el-button>
        <el-button @click="resetQuery"><Icon icon="ep:refresh" class="mr-5px" /> 重置</el-button>
        <el-button
          type="primary"
          plain
          @click="openForm('create')"
          v-hasPermi="['asset:usage-record:create']"
        >
          <Icon icon="ep:plus" class="mr-5px" /> 新增
        </el-button>
        <el-button
          type="success"
          plain
          @click="handleExport"
          :loading="exportLoading"
          v-hasPermi="['asset:usage-record:export']"
        >
          <Icon icon="ep:download" class="mr-5px" /> 导出
        </el-button>
        <el-button
            type="danger"
            plain
            :disabled="isEmpty(checkedIds)"
            @click="handleDeleteBatch"
            v-hasPermi="['asset:usage-record:delete']"
        >
          <Icon icon="ep:delete" class="mr-5px" /> 批量删除
        </el-button>
      </el-form-item>
    </el-form>
  </ContentWrap>

  <!-- 列表 -->
  <ContentWrap>
    <el-table
        row-key="id"
        v-loading="loading"
        :data="list"
        :stripe="true"
        :show-overflow-tooltip="true"
        @selection-change="handleRowCheckboxChange"
    >
    <el-table-column type="selection" width="55" />
      <el-table-column label="资产使用记录编号" align="center" prop="id" />
      <el-table-column label="用户资产账户ID" align="center" prop="accountId" />
      <el-table-column label="资产来源ID" align="center" prop="sourceId" />
      <el-table-column label="用户编号" align="center" prop="userId" />
      <el-table-column label="资产定义ID" align="center" prop="assetId" />
      <el-table-column label="使用流水号" align="center" prop="usageNo" />
      <el-table-column label="使用类型：1消费 2激活 3预约 4核销 5取消 6回退" align="center" prop="usageType" />
      <el-table-column label="本次消耗数量" align="center" prop="consumeQuantity" />
      <el-table-column label="业务类型：1报告任务 2课程开通 3课程学习 4咨询预约 5后台" align="center" prop="bizType" />
      <el-table-column label="业务ID" align="center" prop="bizId" />
      <el-table-column label="业务单号" align="center" prop="bizNo" />
      <el-table-column label="状态：1待处理 2处理中 3成功 4取消 5失败" align="center" prop="status" />
      <el-table-column
        label="预约/计划时间"
        align="center"
        prop="scheduledTime"
        :formatter="dateFormatter"
        width="180px"
      />
      <el-table-column
        label="实际使用时间"
        align="center"
        prop="usedTime"
        :formatter="dateFormatter"
        width="180px"
      />
      <el-table-column
        label="完成时间"
        align="center"
        prop="finishTime"
        :formatter="dateFormatter"
        width="180px"
      />
      <el-table-column label="备注" align="center" prop="remark" />
      <el-table-column
        label="创建时间"
        align="center"
        prop="createtime"
        :formatter="dateFormatter"
        width="180px"
      />
      <el-table-column
        label="更新时间"
        align="center"
        prop="updatetime"
        :formatter="dateFormatter"
        width="180px"
      />
      <el-table-column label="租户编号" align="center" prop="tenantid" />
      <el-table-column label="操作" align="center" min-width="120px">
        <template #default="scope">
          <el-button
            link
            type="primary"
            @click="openForm('update', scope.row.id)"
            v-hasPermi="['asset:usage-record:update']"
          >
            编辑
          </el-button>
          <el-button
            link
            type="danger"
            @click="handleDelete(scope.row.id)"
            v-hasPermi="['asset:usage-record:delete']"
          >
            删除
          </el-button>
        </template>
      </el-table-column>
    </el-table>
    <!-- 分页 -->
    <Pagination
      :total="total"
      v-model:page="queryParams.pageNo"
      v-model:limit="queryParams.pageSize"
      @pagination="getList"
    />
  </ContentWrap>

  <!-- 表单弹窗：添加/修改 -->
  <UsageRecordForm ref="formRef" @success="getList" />
</template>

<script setup lang="ts">
import { isEmpty } from '@/utils/is'
import { dateFormatter } from '@/utils/formatTime'
import download from '@/utils/download'
import { UsageRecordApi, UsageRecord } from '@/api/asset/usagerecord'
import UsageRecordForm from './UsageRecordForm.vue'

/** 资产使用记录 列表 */
defineOptions({ name: 'UsageRecord' })

const message = useMessage() // 消息弹窗
const { t } = useI18n() // 国际化

const loading = ref(true) // 列表的加载中
const list = ref<UsageRecord[]>([]) // 列表的数据
const total = ref(0) // 列表的总页数
const queryParams = reactive({
  pageNo: 1,
  pageSize: 10,
  accountId: undefined,
  sourceId: undefined,
  userId: undefined,
  assetId: undefined,
  usageNo: undefined,
  usageType: undefined,
  consumeQuantity: undefined,
  bizType: undefined,
  bizId: undefined,
  bizNo: undefined,
  status: undefined,
  scheduledTime: [],
  usedTime: [],
  finishTime: [],
  remark: undefined,
  createtime: [],
  updatetime: [],
  tenantid: undefined
})
const queryFormRef = ref() // 搜索的表单
const exportLoading = ref(false) // 导出的加载中

/** 查询列表 */
const getList = async () => {
  loading.value = true
  try {
    const data = await UsageRecordApi.getUsageRecordPage(queryParams)
    list.value = data.list
    total.value = data.total
  } finally {
    loading.value = false
  }
}

/** 搜索按钮操作 */
const handleQuery = () => {
  queryParams.pageNo = 1
  getList()
}

/** 重置按钮操作 */
const resetQuery = () => {
  queryFormRef.value.resetFields()
  handleQuery()
}

/** 添加/修改操作 */
const formRef = ref()
const openForm = (type: string, id?: number) => {
  formRef.value.open(type, id)
}

/** 删除按钮操作 */
const handleDelete = async (id: number) => {
  try {
    // 删除的二次确认
    await message.delConfirm()
    // 发起删除
    await UsageRecordApi.deleteUsageRecord(id)
    message.success(t('common.delSuccess'))
    // 刷新列表
    await getList()
  } catch {}
}

/** 批量删除资产使用记录 */
const handleDeleteBatch = async () => {
  try {
    // 删除的二次确认
    await message.delConfirm()
    await UsageRecordApi.deleteUsageRecordList(checkedIds.value);
    checkedIds.value = [];
    message.success(t('common.delSuccess'))
    await getList();
  } catch {}
}

const checkedIds = ref<number[]>([])
const handleRowCheckboxChange = (records: UsageRecord[]) => {
  checkedIds.value = records.map((item) => item.id!);
}

/** 导出按钮操作 */
const handleExport = async () => {
  try {
    // 导出的二次确认
    await message.exportConfirm()
    // 发起导出
    exportLoading.value = true
    const data = await UsageRecordApi.exportUsageRecord(queryParams)
    download.excel(data, '资产使用记录.xls')
  } catch {
  } finally {
    exportLoading.value = false
  }
}

/** 初始化 **/
onMounted(() => {
  getList()
})
</script>