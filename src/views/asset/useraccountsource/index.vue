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
      <el-form-item label="来源类型：1订单购买 2活动赠送 3后台赠送 4退款回退 5补发" prop="sourceType">
        <el-select
          v-model="queryParams.sourceType"
          placeholder="请选择来源类型：1订单购买 2活动赠送 3后台赠送 4退款回退 5补发"
          clearable
          class="!w-240px"
        >
          <el-option label="请选择字典生成" value="" />
        </el-select>
      </el-form-item>
      <el-form-item label="来源业务ID" prop="sourceId">
        <el-input
          v-model="queryParams.sourceId"
          placeholder="请输入来源业务ID"
          clearable
          @keyup.enter="handleQuery"
          class="!w-240px"
        />
      </el-form-item>
      <el-form-item label="来源业务明细ID" prop="sourceItemId">
        <el-input
          v-model="queryParams.sourceItemId"
          placeholder="请输入来源业务明细ID"
          clearable
          @keyup.enter="handleQuery"
          class="!w-240px"
        />
      </el-form-item>
      <el-form-item label="来源单号" prop="sourceNo">
        <el-input
          v-model="queryParams.sourceNo"
          placeholder="请输入来源单号"
          clearable
          @keyup.enter="handleQuery"
          class="!w-240px"
        />
      </el-form-item>
      <el-form-item label="订单ID" prop="orderId">
        <el-input
          v-model="queryParams.orderId"
          placeholder="请输入订单ID"
          clearable
          @keyup.enter="handleQuery"
          class="!w-240px"
        />
      </el-form-item>
      <el-form-item label="订单项ID" prop="orderItemId">
        <el-input
          v-model="queryParams.orderItemId"
          placeholder="请输入订单项ID"
          clearable
          @keyup.enter="handleQuery"
          class="!w-240px"
        />
      </el-form-item>
      <el-form-item label="商品SPU ID" prop="spuId">
        <el-input
          v-model="queryParams.spuId"
          placeholder="请输入商品SPU ID"
          clearable
          @keyup.enter="handleQuery"
          class="!w-240px"
        />
      </el-form-item>
      <el-form-item label="商品SKU ID" prop="skuId">
        <el-input
          v-model="queryParams.skuId"
          placeholder="请输入商品SKU ID"
          clearable
          @keyup.enter="handleQuery"
          class="!w-240px"
        />
      </el-form-item>
      <el-form-item label="发放模式：1固定数量 2固定天数 3永久访问" prop="grantMode">
        <el-input
          v-model="queryParams.grantMode"
          placeholder="请输入发放模式：1固定数量 2固定天数 3永久访问"
          clearable
          @keyup.enter="handleQuery"
          class="!w-240px"
        />
      </el-form-item>
      <el-form-item label="本来源发放数量" prop="grantQuantity">
        <el-input
          v-model="queryParams.grantQuantity"
          placeholder="请输入本来源发放数量"
          clearable
          @keyup.enter="handleQuery"
          class="!w-240px"
        />
      </el-form-item>
      <el-form-item label="本来源已使用数量" prop="usedQuantity">
        <el-input
          v-model="queryParams.usedQuantity"
          placeholder="请输入本来源已使用数量"
          clearable
          @keyup.enter="handleQuery"
          class="!w-240px"
        />
      </el-form-item>
      <el-form-item label="本来源剩余数量" prop="remainQuantity">
        <el-input
          v-model="queryParams.remainQuantity"
          placeholder="请输入本来源剩余数量"
          clearable
          @keyup.enter="handleQuery"
          class="!w-240px"
        />
      </el-form-item>
      <el-form-item label="本来源发放天数" prop="grantDays">
        <el-input
          v-model="queryParams.grantDays"
          placeholder="请输入本来源发放天数"
          clearable
          @keyup.enter="handleQuery"
          class="!w-240px"
        />
      </el-form-item>
      <el-form-item label="是否永久有效" prop="permanent">
        <el-select
          v-model="queryParams.permanent"
          placeholder="请选择是否永久有效"
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
      <el-form-item label="状态：1正常 2已用尽 3已退完 4已失效" prop="status">
        <el-select
          v-model="queryParams.status"
          placeholder="请选择状态：1正常 2已用尽 3已退完 4已失效"
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
          v-hasPermi="['asset:user-account-source:create']"
        >
          <Icon icon="ep:plus" class="mr-5px" /> 新增
        </el-button>
        <el-button
          type="success"
          plain
          @click="handleExport"
          :loading="exportLoading"
          v-hasPermi="['asset:user-account-source:export']"
        >
          <Icon icon="ep:download" class="mr-5px" /> 导出
        </el-button>
        <el-button
            type="danger"
            plain
            :disabled="isEmpty(checkedIds)"
            @click="handleDeleteBatch"
            v-hasPermi="['asset:user-account-source:delete']"
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
      <el-table-column label="用户资产来源编号" align="center" prop="id" />
      <el-table-column label="用户资产账户ID" align="center" prop="accountId" />
      <el-table-column label="用户编号" align="center" prop="userId" />
      <el-table-column label="资产定义ID" align="center" prop="assetId" />
      <el-table-column label="来源类型：1订单购买 2活动赠送 3后台赠送 4退款回退 5补发" align="center" prop="sourceType" />
      <el-table-column label="来源业务ID" align="center" prop="sourceId" />
      <el-table-column label="来源业务明细ID" align="center" prop="sourceItemId" />
      <el-table-column label="来源单号" align="center" prop="sourceNo" />
      <el-table-column label="订单ID" align="center" prop="orderId" />
      <el-table-column label="订单项ID" align="center" prop="orderItemId" />
      <el-table-column label="商品SPU ID" align="center" prop="spuId" />
      <el-table-column label="商品SKU ID" align="center" prop="skuId" />
      <el-table-column label="发放模式：1固定数量 2固定天数 3永久访问" align="center" prop="grantMode" />
      <el-table-column label="本来源发放数量" align="center" prop="grantQuantity" />
      <el-table-column label="本来源已使用数量" align="center" prop="usedQuantity" />
      <el-table-column label="本来源剩余数量" align="center" prop="remainQuantity" />
      <el-table-column label="本来源发放天数" align="center" prop="grantDays" />
      <el-table-column label="是否永久有效" align="center" prop="permanent" />
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
      <el-table-column label="状态：1正常 2已用尽 3已退完 4已失效" align="center" prop="status" />
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
            v-hasPermi="['asset:user-account-source:update']"
          >
            编辑
          </el-button>
          <el-button
            link
            type="danger"
            @click="handleDelete(scope.row.id)"
            v-hasPermi="['asset:user-account-source:delete']"
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
  <UserAccountSourceForm ref="formRef" @success="getList" />
</template>

<script setup lang="ts">
import { isEmpty } from '@/utils/is'
import { dateFormatter } from '@/utils/formatTime'
import download from '@/utils/download'
import { UserAccountSourceApi, UserAccountSource } from '@/api/asset/useraccountsource'
import UserAccountSourceForm from './UserAccountSourceForm.vue'

/** 用户资产来源 列表 */
defineOptions({ name: 'UserAccountSource' })

const message = useMessage() // 消息弹窗
const { t } = useI18n() // 国际化

const loading = ref(true) // 列表的加载中
const list = ref<UserAccountSource[]>([]) // 列表的数据
const total = ref(0) // 列表的总页数
const queryParams = reactive({
  pageNo: 1,
  pageSize: 10,
  accountId: undefined,
  userId: undefined,
  assetId: undefined,
  sourceType: undefined,
  sourceId: undefined,
  sourceItemId: undefined,
  sourceNo: undefined,
  orderId: undefined,
  orderItemId: undefined,
  spuId: undefined,
  skuId: undefined,
  grantMode: undefined,
  grantQuantity: undefined,
  usedQuantity: undefined,
  remainQuantity: undefined,
  grantDays: undefined,
  permanent: undefined,
  effectiveTime: [],
  expireTime: [],
  status: undefined,
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
    const data = await UserAccountSourceApi.getUserAccountSourcePage(queryParams)
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
    await UserAccountSourceApi.deleteUserAccountSource(id)
    message.success(t('common.delSuccess'))
    // 刷新列表
    await getList()
  } catch {}
}

/** 批量删除用户资产来源 */
const handleDeleteBatch = async () => {
  try {
    // 删除的二次确认
    await message.delConfirm()
    await UserAccountSourceApi.deleteUserAccountSourceList(checkedIds.value);
    checkedIds.value = [];
    message.success(t('common.delSuccess'))
    await getList();
  } catch {}
}

const checkedIds = ref<number[]>([])
const handleRowCheckboxChange = (records: UserAccountSource[]) => {
  checkedIds.value = records.map((item) => item.id!);
}

/** 导出按钮操作 */
const handleExport = async () => {
  try {
    // 导出的二次确认
    await message.exportConfirm()
    // 发起导出
    exportLoading.value = true
    const data = await UserAccountSourceApi.exportUserAccountSource(queryParams)
    download.excel(data, '用户资产来源.xls')
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