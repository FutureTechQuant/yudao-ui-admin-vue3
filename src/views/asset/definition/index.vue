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
      <el-form-item label="资产编码" prop="code">
        <el-input
          v-model="queryParams.code"
          placeholder="请输入资产编码"
          clearable
          @keyup.enter="handleQuery"
          class="!w-240px"
        />
      </el-form-item>
      <el-form-item label="资产名称" prop="name">
        <el-input
          v-model="queryParams.name"
          placeholder="请输入资产名称"
          clearable
          @keyup.enter="handleQuery"
          class="!w-240px"
        />
      </el-form-item>
      <el-form-item label="资产类型：1报告 2课程 3咨询 99其他" prop="assetType">
        <el-select
          v-model="queryParams.assetType"
          placeholder="请选择资产类型：1报告 2课程 3咨询 99其他"
          clearable
          class="!w-240px"
        >
          <el-option label="请选择字典生成" value="" />
        </el-select>
      </el-form-item>
      <el-form-item label="履约类型：1QUOTA次数型 2ACCESS访问型 3APPOINTMENT预约型" prop="fulfillmentType">
        <el-select
          v-model="queryParams.fulfillmentType"
          placeholder="请选择履约类型：1QUOTA次数型 2ACCESS访问型 3APPOINTMENT预约型"
          clearable
          class="!w-240px"
        >
          <el-option label="请选择字典生成" value="" />
        </el-select>
      </el-form-item>
      <el-form-item label="单位类型：1次 2份 3天 4月 5席位" prop="unitType">
        <el-select
          v-model="queryParams.unitType"
          placeholder="请选择单位类型：1次 2份 3天 4月 5席位"
          clearable
          class="!w-240px"
        >
          <el-option label="请选择字典生成" value="" />
        </el-select>
      </el-form-item>
      <el-form-item label="过期规则：1永久 2固定时间 3领取后N天" prop="expireRuleType">
        <el-select
          v-model="queryParams.expireRuleType"
          placeholder="请选择过期规则：1永久 2固定时间 3领取后N天"
          clearable
          class="!w-240px"
        >
          <el-option label="请选择字典生成" value="" />
        </el-select>
      </el-form-item>
      <el-form-item label="固定过期时间" prop="fixedExpireTime">
        <el-date-picker
          v-model="queryParams.fixedExpireTime"
          value-format="YYYY-MM-DD HH:mm:ss"
          type="daterange"
          start-placeholder="开始日期"
          end-placeholder="结束日期"
          :default-time="[new Date('1 00:00:00'), new Date('1 23:59:59')]"
          class="!w-220px"
        />
      </el-form-item>
      <el-form-item label="领取后有效天数" prop="expireDays">
        <el-input
          v-model="queryParams.expireDays"
          placeholder="请输入领取后有效天数"
          clearable
          @keyup.enter="handleQuery"
          class="!w-240px"
        />
      </el-form-item>
      <el-form-item label="是否支持退款回退" prop="supportRefund">
        <el-select
          v-model="queryParams.supportRefund"
          placeholder="请选择是否支持退款回退"
          clearable
          class="!w-240px"
        >
          <el-option label="请选择字典生成" value="" />
        </el-select>
      </el-form-item>
      <el-form-item label="是否支持转移" prop="supportTransfer">
        <el-select
          v-model="queryParams.supportTransfer"
          placeholder="请选择是否支持转移"
          clearable
          class="!w-240px"
        >
          <el-option label="请选择字典生成" value="" />
        </el-select>
      </el-form-item>
      <el-form-item label="状态：1启用 0停用" prop="status">
        <el-select
          v-model="queryParams.status"
          placeholder="请选择状态：1启用 0停用"
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
          v-hasPermi="['asset:definition:create']"
        >
          <Icon icon="ep:plus" class="mr-5px" /> 新增
        </el-button>
        <el-button
          type="success"
          plain
          @click="handleExport"
          :loading="exportLoading"
          v-hasPermi="['asset:definition:export']"
        >
          <Icon icon="ep:download" class="mr-5px" /> 导出
        </el-button>
        <el-button
            type="danger"
            plain
            :disabled="isEmpty(checkedIds)"
            @click="handleDeleteBatch"
            v-hasPermi="['asset:definition:delete']"
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
      <el-table-column label="资产定义编号" align="center" prop="id" />
      <el-table-column label="资产编码" align="center" prop="code" />
      <el-table-column label="资产名称" align="center" prop="name" />
      <el-table-column label="资产类型：1报告 2课程 3咨询 99其他" align="center" prop="assetType" />
      <el-table-column label="履约类型：1QUOTA次数型 2ACCESS访问型 3APPOINTMENT预约型" align="center" prop="fulfillmentType" />
      <el-table-column label="单位类型：1次 2份 3天 4月 5席位" align="center" prop="unitType" />
      <el-table-column label="过期规则：1永久 2固定时间 3领取后N天" align="center" prop="expireRuleType" />
      <el-table-column
        label="固定过期时间"
        align="center"
        prop="fixedExpireTime"
        :formatter="dateFormatter"
        width="180px"
      />
      <el-table-column label="领取后有效天数" align="center" prop="expireDays" />
      <el-table-column label="是否支持退款回退" align="center" prop="supportRefund" />
      <el-table-column label="是否支持转移" align="center" prop="supportTransfer" />
      <el-table-column label="状态：1启用 0停用" align="center" prop="status" />
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
            v-hasPermi="['asset:definition:update']"
          >
            编辑
          </el-button>
          <el-button
            link
            type="danger"
            @click="handleDelete(scope.row.id)"
            v-hasPermi="['asset:definition:delete']"
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
  <DefinitionForm ref="formRef" @success="getList" />
</template>

<script setup lang="ts">
import { isEmpty } from '@/utils/is'
import { dateFormatter } from '@/utils/formatTime'
import download from '@/utils/download'
import { DefinitionApi, Definition } from '@/api/asset/definition'
import DefinitionForm from './DefinitionForm.vue'

/** 资产定义 列表 */
defineOptions({ name: 'Definition' })

const message = useMessage() // 消息弹窗
const { t } = useI18n() // 国际化

const loading = ref(true) // 列表的加载中
const list = ref<Definition[]>([]) // 列表的数据
const total = ref(0) // 列表的总页数
const queryParams = reactive({
  pageNo: 1,
  pageSize: 10,
  code: undefined,
  name: undefined,
  assetType: undefined,
  fulfillmentType: undefined,
  unitType: undefined,
  expireRuleType: undefined,
  fixedExpireTime: [],
  expireDays: undefined,
  supportRefund: undefined,
  supportTransfer: undefined,
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
    const data = await DefinitionApi.getDefinitionPage(queryParams)
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
    await DefinitionApi.deleteDefinition(id)
    message.success(t('common.delSuccess'))
    // 刷新列表
    await getList()
  } catch {}
}

/** 批量删除资产定义 */
const handleDeleteBatch = async () => {
  try {
    // 删除的二次确认
    await message.delConfirm()
    await DefinitionApi.deleteDefinitionList(checkedIds.value);
    checkedIds.value = [];
    message.success(t('common.delSuccess'))
    await getList();
  } catch {}
}

const checkedIds = ref<number[]>([])
const handleRowCheckboxChange = (records: Definition[]) => {
  checkedIds.value = records.map((item) => item.id!);
}

/** 导出按钮操作 */
const handleExport = async () => {
  try {
    // 导出的二次确认
    await message.exportConfirm()
    // 发起导出
    exportLoading.value = true
    const data = await DefinitionApi.exportDefinition(queryParams)
    download.excel(data, '资产定义.xls')
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