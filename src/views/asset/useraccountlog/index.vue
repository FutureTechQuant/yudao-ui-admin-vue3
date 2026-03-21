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
      <el-form-item label="资产来源ID" prop="sourceId">
        <el-input
          v-model="queryParams.sourceId"
          placeholder="请输入资产来源ID"
          clearable
          @keyup.enter="handleQuery"
          class="!w-240px"
        />
      </el-form-item>
      <el-form-item label="变动流水号" prop="changeNo">
        <el-input
          v-model="queryParams.changeNo"
          placeholder="请输入变动流水号"
          clearable
          @keyup.enter="handleQuery"
          class="!w-240px"
        />
      </el-form-item>
      <el-form-item label="变动类型：1发放 2扣减 3退款回退 4后台增加 5后台扣减 6过期 7冻结 8解冻 9激活" prop="changeType">
        <el-select
          v-model="queryParams.changeType"
          placeholder="请选择变动类型：1发放 2扣减 3退款回退 4后台增加 5后台扣减 6过期 7冻结 8解冻 9激活"
          clearable
          class="!w-240px"
        >
          <el-option label="请选择字典生成" value="" />
        </el-select>
      </el-form-item>
      <el-form-item label="本次变动数量，增加为正，扣减为负" prop="changeQuantity">
        <el-input
          v-model="queryParams.changeQuantity"
          placeholder="请输入本次变动数量，增加为正，扣减为负"
          clearable
          @keyup.enter="handleQuery"
          class="!w-240px"
        />
      </el-form-item>
      <el-form-item label="变动前剩余数量" prop="beforeQuantity">
        <el-input
          v-model="queryParams.beforeQuantity"
          placeholder="请输入变动前剩余数量"
          clearable
          @keyup.enter="handleQuery"
          class="!w-240px"
        />
      </el-form-item>
      <el-form-item label="变动后剩余数量" prop="afterQuantity">
        <el-input
          v-model="queryParams.afterQuantity"
          placeholder="请输入变动后剩余数量"
          clearable
          @keyup.enter="handleQuery"
          class="!w-240px"
        />
      </el-form-item>
      <el-form-item label="业务类型：1订单 2订单项 3售后 4报告任务 5课程开通 6咨询预约 7后台" prop="bizType">
        <el-select
          v-model="queryParams.bizType"
          placeholder="请选择业务类型：1订单 2订单项 3售后 4报告任务 5课程开通 6咨询预约 7后台"
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
      <el-form-item label="业务明细ID" prop="bizItemId">
        <el-input
          v-model="queryParams.bizItemId"
          placeholder="请输入业务明细ID"
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
      <el-form-item label="操作人ID" prop="operatorUserId">
        <el-input
          v-model="queryParams.operatorUserId"
          placeholder="请输入操作人ID"
          clearable
          @keyup.enter="handleQuery"
          class="!w-240px"
        />
      </el-form-item>
      <el-form-item label="操作人类型" prop="operatorUserType">
        <el-select
          v-model="queryParams.operatorUserType"
          placeholder="请选择操作人类型"
          clearable
          class="!w-240px"
        >
          <el-option label="请选择字典生成" value="" />
        </el-select>
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
      <el-form-item label="操作时间" prop="operateTime">
        <el-date-picker
          v-model="queryParams.operateTime"
          value-format="YYYY-MM-DD HH:mm:ss"
          type="daterange"
          start-placeholder="开始日期"
          end-placeholder="结束日期"
          :default-time="[new Date('1 00:00:00'), new Date('1 23:59:59')]"
          class="!w-220px"
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
          v-hasPermi="['asset:user-account-log:create']"
        >
          <Icon icon="ep:plus" class="mr-5px" /> 新增
        </el-button>
        <el-button
          type="success"
          plain
          @click="handleExport"
          :loading="exportLoading"
          v-hasPermi="['asset:user-account-log:export']"
        >
          <Icon icon="ep:download" class="mr-5px" /> 导出
        </el-button>
        <el-button
            type="danger"
            plain
            :disabled="isEmpty(checkedIds)"
            @click="handleDeleteBatch"
            v-hasPermi="['asset:user-account-log:delete']"
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
      <el-table-column label="用户资产账户流水编号" align="center" prop="id" />
      <el-table-column label="用户资产账户ID" align="center" prop="accountId" />
      <el-table-column label="用户编号" align="center" prop="userId" />
      <el-table-column label="资产定义ID" align="center" prop="assetId" />
      <el-table-column label="资产来源ID" align="center" prop="sourceId" />
      <el-table-column label="变动流水号" align="center" prop="changeNo" />
      <el-table-column label="变动类型：1发放 2扣减 3退款回退 4后台增加 5后台扣减 6过期 7冻结 8解冻 9激活" align="center" prop="changeType" />
      <el-table-column label="本次变动数量，增加为正，扣减为负" align="center" prop="changeQuantity" />
      <el-table-column label="变动前剩余数量" align="center" prop="beforeQuantity" />
      <el-table-column label="变动后剩余数量" align="center" prop="afterQuantity" />
      <el-table-column label="业务类型：1订单 2订单项 3售后 4报告任务 5课程开通 6咨询预约 7后台" align="center" prop="bizType" />
      <el-table-column label="业务ID" align="center" prop="bizId" />
      <el-table-column label="业务明细ID" align="center" prop="bizItemId" />
      <el-table-column label="业务单号" align="center" prop="bizNo" />
      <el-table-column label="操作人ID" align="center" prop="operatorUserId" />
      <el-table-column label="操作人类型" align="center" prop="operatorUserType" />
      <el-table-column label="备注" align="center" prop="remark" />
      <el-table-column
        label="操作时间"
        align="center"
        prop="operateTime"
        :formatter="dateFormatter"
        width="180px"
      />
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
            v-hasPermi="['asset:user-account-log:update']"
          >
            编辑
          </el-button>
          <el-button
            link
            type="danger"
            @click="handleDelete(scope.row.id)"
            v-hasPermi="['asset:user-account-log:delete']"
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
  <UserAccountLogForm ref="formRef" @success="getList" />
</template>

<script setup lang="ts">
import { isEmpty } from '@/utils/is'
import { dateFormatter } from '@/utils/formatTime'
import download from '@/utils/download'
import { UserAccountLogApi, UserAccountLog } from '@/api/asset/useraccountlog'
import UserAccountLogForm from './UserAccountLogForm.vue'

/** 用户资产账户流水 列表 */
defineOptions({ name: 'UserAccountLog' })

const message = useMessage() // 消息弹窗
const { t } = useI18n() // 国际化

const loading = ref(true) // 列表的加载中
const list = ref<UserAccountLog[]>([]) // 列表的数据
const total = ref(0) // 列表的总页数
const queryParams = reactive({
  pageNo: 1,
  pageSize: 10,
  accountId: undefined,
  userId: undefined,
  assetId: undefined,
  sourceId: undefined,
  changeNo: undefined,
  changeType: undefined,
  changeQuantity: undefined,
  beforeQuantity: undefined,
  afterQuantity: undefined,
  bizType: undefined,
  bizId: undefined,
  bizItemId: undefined,
  bizNo: undefined,
  operatorUserId: undefined,
  operatorUserType: undefined,
  remark: undefined,
  operateTime: [],
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
    const data = await UserAccountLogApi.getUserAccountLogPage(queryParams)
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
    await UserAccountLogApi.deleteUserAccountLog(id)
    message.success(t('common.delSuccess'))
    // 刷新列表
    await getList()
  } catch {}
}

/** 批量删除用户资产账户流水 */
const handleDeleteBatch = async () => {
  try {
    // 删除的二次确认
    await message.delConfirm()
    await UserAccountLogApi.deleteUserAccountLogList(checkedIds.value);
    checkedIds.value = [];
    message.success(t('common.delSuccess'))
    await getList();
  } catch {}
}

const checkedIds = ref<number[]>([])
const handleRowCheckboxChange = (records: UserAccountLog[]) => {
  checkedIds.value = records.map((item) => item.id!);
}

/** 导出按钮操作 */
const handleExport = async () => {
  try {
    // 导出的二次确认
    await message.exportConfirm()
    // 发起导出
    exportLoading.value = true
    const data = await UserAccountLogApi.exportUserAccountLog(queryParams)
    download.excel(data, '用户资产账户流水.xls')
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