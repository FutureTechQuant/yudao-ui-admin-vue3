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
      <el-form-item label="发放模式：1固定数量 2固定天数 3永久访问" prop="grantMode">
        <el-input
          v-model="queryParams.grantMode"
          placeholder="请输入发放模式：1固定数量 2固定天数 3永久访问"
          clearable
          @keyup.enter="handleQuery"
          class="!w-240px"
        />
      </el-form-item>
      <el-form-item label="发放数量；次数型/预约型使用" prop="grantQuantity">
        <el-input
          v-model="queryParams.grantQuantity"
          placeholder="请输入发放数量；次数型/预约型使用"
          clearable
          @keyup.enter="handleQuery"
          class="!w-240px"
        />
      </el-form-item>
      <el-form-item label="发放天数；访问型使用" prop="grantDays">
        <el-input
          v-model="queryParams.grantDays"
          placeholder="请输入发放天数；访问型使用"
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
      <el-form-item label="生效延迟天数" prop="effectiveDelayDays">
        <el-input
          v-model="queryParams.effectiveDelayDays"
          placeholder="请输入生效延迟天数"
          clearable
          @keyup.enter="handleQuery"
          class="!w-240px"
        />
      </el-form-item>
      <el-form-item label="过期规则：0跟随资产定义 1永久 2固定时间 3领取后N天" prop="expireRuleType">
        <el-select
          v-model="queryParams.expireRuleType"
          placeholder="请选择过期规则：0跟随资产定义 1永久 2固定时间 3领取后N天"
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
      <el-form-item label="排序" prop="sort">
        <el-input
          v-model="queryParams.sort"
          placeholder="请输入排序"
          clearable
          @keyup.enter="handleQuery"
          class="!w-240px"
        />
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
          v-hasPermi="['asset:sku-grant-rule:create']"
        >
          <Icon icon="ep:plus" class="mr-5px" /> 新增
        </el-button>
        <el-button
          type="success"
          plain
          @click="handleExport"
          :loading="exportLoading"
          v-hasPermi="['asset:sku-grant-rule:export']"
        >
          <Icon icon="ep:download" class="mr-5px" /> 导出
        </el-button>
        <el-button
            type="danger"
            plain
            :disabled="isEmpty(checkedIds)"
            @click="handleDeleteBatch"
            v-hasPermi="['asset:sku-grant-rule:delete']"
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
      <el-table-column label="SKU资产发放规则编号" align="center" prop="id" />
      <el-table-column label="商品SPU ID" align="center" prop="spuId" />
      <el-table-column label="商品SKU ID" align="center" prop="skuId" />
      <el-table-column label="资产定义ID" align="center" prop="assetId" />
      <el-table-column label="资产编码快照" align="center" prop="assetCodeSnapshot" />
      <el-table-column label="资产名称快照" align="center" prop="assetNameSnapshot" />
      <el-table-column label="履约类型快照：1QUOTA 2ACCESS 3APPOINTMENT" align="center" prop="fulfillmentType" />
      <el-table-column label="单位类型快照：1次 2份 3天 4月 5席位" align="center" prop="unitType" />
      <el-table-column label="发放模式：1固定数量 2固定天数 3永久访问" align="center" prop="grantMode" />
      <el-table-column label="发放数量；次数型/预约型使用" align="center" prop="grantQuantity" />
      <el-table-column label="发放天数；访问型使用" align="center" prop="grantDays" />
      <el-table-column label="是否永久有效" align="center" prop="permanent" />
      <el-table-column label="生效延迟天数" align="center" prop="effectiveDelayDays" />
      <el-table-column label="过期规则：0跟随资产定义 1永久 2固定时间 3领取后N天" align="center" prop="expireRuleType" />
      <el-table-column
        label="固定过期时间"
        align="center"
        prop="fixedExpireTime"
        :formatter="dateFormatter"
        width="180px"
      />
      <el-table-column label="领取后有效天数" align="center" prop="expireDays" />
      <el-table-column label="排序" align="center" prop="sort" />
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
            v-hasPermi="['asset:sku-grant-rule:update']"
          >
            编辑
          </el-button>
          <el-button
            link
            type="danger"
            @click="handleDelete(scope.row.id)"
            v-hasPermi="['asset:sku-grant-rule:delete']"
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
  <SkuGrantRuleForm ref="formRef" @success="getList" />
</template>

<script setup lang="ts">
import { isEmpty } from '@/utils/is'
import { dateFormatter } from '@/utils/formatTime'
import download from '@/utils/download'
import { SkuGrantRuleApi, SkuGrantRule } from '@/api/asset/skugrantrule'
import SkuGrantRuleForm from './SkuGrantRuleForm.vue'

/** SKU资产发放规则 列表 */
defineOptions({ name: 'SkuGrantRule' })

const message = useMessage() // 消息弹窗
const { t } = useI18n() // 国际化

const loading = ref(true) // 列表的加载中
const list = ref<SkuGrantRule[]>([]) // 列表的数据
const total = ref(0) // 列表的总页数
const queryParams = reactive({
  pageNo: 1,
  pageSize: 10,
  spuId: undefined,
  skuId: undefined,
  assetId: undefined,
  assetCodeSnapshot: undefined,
  assetNameSnapshot: undefined,
  fulfillmentType: undefined,
  unitType: undefined,
  grantMode: undefined,
  grantQuantity: undefined,
  grantDays: undefined,
  permanent: undefined,
  effectiveDelayDays: undefined,
  expireRuleType: undefined,
  fixedExpireTime: [],
  expireDays: undefined,
  sort: undefined,
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
    const data = await SkuGrantRuleApi.getSkuGrantRulePage(queryParams)
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
    await SkuGrantRuleApi.deleteSkuGrantRule(id)
    message.success(t('common.delSuccess'))
    // 刷新列表
    await getList()
  } catch {}
}

/** 批量删除SKU资产发放规则 */
const handleDeleteBatch = async () => {
  try {
    // 删除的二次确认
    await message.delConfirm()
    await SkuGrantRuleApi.deleteSkuGrantRuleList(checkedIds.value);
    checkedIds.value = [];
    message.success(t('common.delSuccess'))
    await getList();
  } catch {}
}

const checkedIds = ref<number[]>([])
const handleRowCheckboxChange = (records: SkuGrantRule[]) => {
  checkedIds.value = records.map((item) => item.id!);
}

/** 导出按钮操作 */
const handleExport = async () => {
  try {
    // 导出的二次确认
    await message.exportConfirm()
    // 发起导出
    exportLoading.value = true
    const data = await SkuGrantRuleApi.exportSkuGrantRule(queryParams)
    download.excel(data, 'SKU资产发放规则.xls')
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