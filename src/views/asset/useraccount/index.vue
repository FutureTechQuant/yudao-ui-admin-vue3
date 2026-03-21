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
      <el-form-item label="资产编码快照" prop="assetCodeSnapshot">
        <el-input
          v-model="queryParams.assetCodeSnapshot"
          placeholder="请输入资产编码快照"
          clearable
          @keyup.enter="handleQuery"
          class="!w-240px"
        />
      </el-form-item>
      <el-form-item label="资产名称快照" prop="assetNameSnapshot">
        <el-input
          v-model="queryParams.assetNameSnapshot"
          placeholder="请输入资产名称快照"
          clearable
          @keyup.enter="handleQuery"
          class="!w-240px"
        />
      </el-form-item>
      <el-form-item label="资产类型快照：1报告 2课程 3咨询 99其他" prop="assetType">
        <el-select
          v-model="queryParams.assetType"
          placeholder="请选择资产类型快照：1报告 2课程 3咨询 99其他"
          clearable
          class="!w-240px"
        >
          <el-option label="请选择字典生成" value="" />
        </el-select>
      </el-form-item>
      <el-form-item label="履约类型快照：1QUOTA 2ACCESS 3APPOINTMENT" prop="fulfillmentType">
        <el-select
          v-model="queryParams.fulfillmentType"
          placeholder="请选择履约类型快照：1QUOTA 2ACCESS 3APPOINTMENT"
          clearable
          class="!w-240px"
        >
          <el-option label="请选择字典生成" value="" />
        </el-select>
      </el-form-item>
      <el-form-item label="单位类型快照：1次 2份 3天 4月 5席位" prop="unitType">
        <el-select
          v-model="queryParams.unitType"
          placeholder="请选择单位类型快照：1次 2份 3天 4月 5席位"
          clearable
          class="!w-240px"
        >
          <el-option label="请选择字典生成" value="" />
        </el-select>
      </el-form-item>
      <el-form-item label="累计发放数量" prop="totalQuantity">
        <el-input
          v-model="queryParams.totalQuantity"
          placeholder="请输入累计发放数量"
          clearable
          @keyup.enter="handleQuery"
          class="!w-240px"
        />
      </el-form-item>
      <el-form-item label="累计已使用数量" prop="usedQuantity">
        <el-input
          v-model="queryParams.usedQuantity"
          placeholder="请输入累计已使用数量"
          clearable
          @keyup.enter="handleQuery"
          class="!w-240px"
        />
      </el-form-item>
      <el-form-item label="累计退款回退数量" prop="refundQuantity">
        <el-input
          v-model="queryParams.refundQuantity"
          placeholder="请输入累计退款回退数量"
          clearable
          @keyup.enter="handleQuery"
          class="!w-240px"
        />
      </el-form-item>
      <el-form-item label="累计人工调整数量" prop="adjustQuantity">
        <el-input
          v-model="queryParams.adjustQuantity"
          placeholder="请输入累计人工调整数量"
          clearable
          @keyup.enter="handleQuery"
          class="!w-240px"
        />
      </el-form-item>
      <el-form-item label="当前剩余数量" prop="remainQuantity">
        <el-input
          v-model="queryParams.remainQuantity"
          placeholder="请输入当前剩余数量"
          clearable
          @keyup.enter="handleQuery"
          class="!w-240px"
        />
      </el-form-item>
      <el-form-item label="冻结数量" prop="freezeQuantity">
        <el-input
          v-model="queryParams.freezeQuantity"
          placeholder="请输入冻结数量"
          clearable
          @keyup.enter="handleQuery"
          class="!w-240px"
        />
      </el-form-item>
      <el-form-item label="状态：1正常 2冻结 3失效 4用尽" prop="status">
        <el-select
          v-model="queryParams.status"
          placeholder="请选择状态：1正常 2冻结 3失效 4用尽"
          clearable
          class="!w-240px"
        >
          <el-option label="请选择字典生成" value="" />
        </el-select>
      </el-form-item>
      <el-form-item label="生效时间" prop="effectiveTime">
        <el-date-picker
          v-model="queryParams.effectiveTime"
          value-format="YYYY-MM-DD HH:mm:ss"
          type="daterange"
          start-placeholder="开始日期"
          end-placeholder="结束日期"
          :default-time="[new Date('1 00:00:00'), new Date('1 23:59:59')]"
          class="!w-220px"
        />
      </el-form-item>
      <el-form-item label="过期时间" prop="expireTime">
        <el-date-picker
          v-model="queryParams.expireTime"
          value-format="YYYY-MM-DD HH:mm:ss"
          type="daterange"
          start-placeholder="开始日期"
          end-placeholder="结束日期"
          :default-time="[new Date('1 00:00:00'), new Date('1 23:59:59')]"
          class="!w-220px"
        />
      </el-form-item>
      <el-form-item label="最后发放时间" prop="lastGrantTime">
        <el-date-picker
          v-model="queryParams.lastGrantTime"
          value-format="YYYY-MM-DD HH:mm:ss"
          type="daterange"
          start-placeholder="开始日期"
          end-placeholder="结束日期"
          :default-time="[new Date('1 00:00:00'), new Date('1 23:59:59')]"
          class="!w-220px"
        />
      </el-form-item>
      <el-form-item label="最后使用时间" prop="lastUseTime">
        <el-date-picker
          v-model="queryParams.lastUseTime"
          value-format="YYYY-MM-DD HH:mm:ss"
          type="daterange"
          start-placeholder="开始日期"
          end-placeholder="结束日期"
          :default-time="[new Date('1 00:00:00'), new Date('1 23:59:59')]"
          class="!w-220px"
        />
      </el-form-item>
      <el-form-item label="乐观锁版本号" prop="version">
        <el-input
          v-model="queryParams.version"
          placeholder="请输入乐观锁版本号"
          clearable
          @keyup.enter="handleQuery"
          class="!w-240px"
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
          v-hasPermi="['asset:user-account:create']"
        >
          <Icon icon="ep:plus" class="mr-5px" /> 新增
        </el-button>
        <el-button
          type="success"
          plain
          @click="handleExport"
          :loading="exportLoading"
          v-hasPermi="['asset:user-account:export']"
        >
          <Icon icon="ep:download" class="mr-5px" /> 导出
        </el-button>
        <el-button
            type="danger"
            plain
            :disabled="isEmpty(checkedIds)"
            @click="handleDeleteBatch"
            v-hasPermi="['asset:user-account:delete']"
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
      <el-table-column label="用户资产账户编号" align="center" prop="id" />
      <el-table-column label="用户编号" align="center" prop="userId" />
      <el-table-column label="资产定义ID" align="center" prop="assetId" />
      <el-table-column label="资产编码快照" align="center" prop="assetCodeSnapshot" />
      <el-table-column label="资产名称快照" align="center" prop="assetNameSnapshot" />
      <el-table-column label="资产类型快照：1报告 2课程 3咨询 99其他" align="center" prop="assetType" />
      <el-table-column label="履约类型快照：1QUOTA 2ACCESS 3APPOINTMENT" align="center" prop="fulfillmentType" />
      <el-table-column label="单位类型快照：1次 2份 3天 4月 5席位" align="center" prop="unitType" />
      <el-table-column label="累计发放数量" align="center" prop="totalQuantity" />
      <el-table-column label="累计已使用数量" align="center" prop="usedQuantity" />
      <el-table-column label="累计退款回退数量" align="center" prop="refundQuantity" />
      <el-table-column label="累计人工调整数量" align="center" prop="adjustQuantity" />
      <el-table-column label="当前剩余数量" align="center" prop="remainQuantity" />
      <el-table-column label="冻结数量" align="center" prop="freezeQuantity" />
      <el-table-column label="状态：1正常 2冻结 3失效 4用尽" align="center" prop="status" />
      <el-table-column
        label="生效时间"
        align="center"
        prop="effectiveTime"
        :formatter="dateFormatter"
        width="180px"
      />
      <el-table-column
        label="过期时间"
        align="center"
        prop="expireTime"
        :formatter="dateFormatter"
        width="180px"
      />
      <el-table-column
        label="最后发放时间"
        align="center"
        prop="lastGrantTime"
        :formatter="dateFormatter"
        width="180px"
      />
      <el-table-column
        label="最后使用时间"
        align="center"
        prop="lastUseTime"
        :formatter="dateFormatter"
        width="180px"
      />
      <el-table-column label="乐观锁版本号" align="center" prop="version" />
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
            v-hasPermi="['asset:user-account:update']"
          >
            编辑
          </el-button>
          <el-button
            link
            type="danger"
            @click="handleDelete(scope.row.id)"
            v-hasPermi="['asset:user-account:delete']"
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
  <UserAccountForm ref="formRef" @success="getList" />
</template>

<script setup lang="ts">
import { isEmpty } from '@/utils/is'
import { dateFormatter } from '@/utils/formatTime'
import download from '@/utils/download'
import { UserAccountApi, UserAccount } from '@/api/asset/useraccount'
import UserAccountForm from './UserAccountForm.vue'

/** 用户资产账户 列表 */
defineOptions({ name: 'UserAccount' })

const message = useMessage() // 消息弹窗
const { t } = useI18n() // 国际化

const loading = ref(true) // 列表的加载中
const list = ref<UserAccount[]>([]) // 列表的数据
const total = ref(0) // 列表的总页数
const queryParams = reactive({
  pageNo: 1,
  pageSize: 10,
  userId: undefined,
  assetId: undefined,
  assetCodeSnapshot: undefined,
  assetNameSnapshot: undefined,
  assetType: undefined,
  fulfillmentType: undefined,
  unitType: undefined,
  totalQuantity: undefined,
  usedQuantity: undefined,
  refundQuantity: undefined,
  adjustQuantity: undefined,
  remainQuantity: undefined,
  freezeQuantity: undefined,
  status: undefined,
  effectiveTime: [],
  expireTime: [],
  lastGrantTime: [],
  lastUseTime: [],
  version: undefined,
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
    const data = await UserAccountApi.getUserAccountPage(queryParams)
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
    await UserAccountApi.deleteUserAccount(id)
    message.success(t('common.delSuccess'))
    // 刷新列表
    await getList()
  } catch {}
}

/** 批量删除用户资产账户 */
const handleDeleteBatch = async () => {
  try {
    // 删除的二次确认
    await message.delConfirm()
    await UserAccountApi.deleteUserAccountList(checkedIds.value);
    checkedIds.value = [];
    message.success(t('common.delSuccess'))
    await getList();
  } catch {}
}

const checkedIds = ref<number[]>([])
const handleRowCheckboxChange = (records: UserAccount[]) => {
  checkedIds.value = records.map((item) => item.id!);
}

/** 导出按钮操作 */
const handleExport = async () => {
  try {
    // 导出的二次确认
    await message.exportConfirm()
    // 发起导出
    exportLoading.value = true
    const data = await UserAccountApi.exportUserAccount(queryParams)
    download.excel(data, '用户资产账户.xls')
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