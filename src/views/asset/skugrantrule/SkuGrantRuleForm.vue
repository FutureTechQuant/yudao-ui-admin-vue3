<template>
  <Dialog :title="dialogTitle" v-model="dialogVisible">
    <el-form
      ref="formRef"
      :model="formData"
      :rules="formRules"
      label-width="100px"
      v-loading="formLoading"
    >
      <el-form-item label="商品SPU ID" prop="spuId">
        <el-input v-model="formData.spuId" placeholder="请输入商品SPU ID" />
      </el-form-item>
      <el-form-item label="商品SKU ID" prop="skuId">
        <el-input v-model="formData.skuId" placeholder="请输入商品SKU ID" />
      </el-form-item>
      <el-form-item label="资产定义ID" prop="assetId">
        <el-input v-model="formData.assetId" placeholder="请输入资产定义ID" />
      </el-form-item>
      <el-form-item label="资产编码快照" prop="assetCodeSnapshot">
        <el-input v-model="formData.assetCodeSnapshot" placeholder="请输入资产编码快照" />
      </el-form-item>
      <el-form-item label="资产名称快照" prop="assetNameSnapshot">
        <el-input v-model="formData.assetNameSnapshot" placeholder="请输入资产名称快照" />
      </el-form-item>
      <el-form-item label="履约类型快照：1QUOTA 2ACCESS 3APPOINTMENT" prop="fulfillmentType">
        <el-select v-model="formData.fulfillmentType" placeholder="请选择履约类型快照：1QUOTA 2ACCESS 3APPOINTMENT">
          <el-option label="请选择字典生成" value="" />
        </el-select>
      </el-form-item>
      <el-form-item label="单位类型快照：1次 2份 3天 4月 5席位" prop="unitType">
        <el-select v-model="formData.unitType" placeholder="请选择单位类型快照：1次 2份 3天 4月 5席位">
          <el-option label="请选择字典生成" value="" />
        </el-select>
      </el-form-item>
      <el-form-item label="发放模式：1固定数量 2固定天数 3永久访问" prop="grantMode">
        <el-input v-model="formData.grantMode" placeholder="请输入发放模式：1固定数量 2固定天数 3永久访问" />
      </el-form-item>
      <el-form-item label="发放数量；次数型/预约型使用" prop="grantQuantity">
        <el-input v-model="formData.grantQuantity" placeholder="请输入发放数量；次数型/预约型使用" />
      </el-form-item>
      <el-form-item label="发放天数；访问型使用" prop="grantDays">
        <el-input v-model="formData.grantDays" placeholder="请输入发放天数；访问型使用" />
      </el-form-item>
      <el-form-item label="是否永久有效" prop="permanent">
        <el-radio-group v-model="formData.permanent">
          <el-radio value="1">请选择字典生成</el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item label="生效延迟天数" prop="effectiveDelayDays">
        <el-input v-model="formData.effectiveDelayDays" placeholder="请输入生效延迟天数" />
      </el-form-item>
      <el-form-item label="过期规则：0跟随资产定义 1永久 2固定时间 3领取后N天" prop="expireRuleType">
        <el-select v-model="formData.expireRuleType" placeholder="请选择过期规则：0跟随资产定义 1永久 2固定时间 3领取后N天">
          <el-option label="请选择字典生成" value="" />
        </el-select>
      </el-form-item>
      <el-form-item label="固定过期时间" prop="fixedExpireTime">
        <el-date-picker
          v-model="formData.fixedExpireTime"
          type="date"
          value-format="x"
          placeholder="选择固定过期时间"
        />
      </el-form-item>
      <el-form-item label="领取后有效天数" prop="expireDays">
        <el-input v-model="formData.expireDays" placeholder="请输入领取后有效天数" />
      </el-form-item>
      <el-form-item label="排序" prop="sort">
        <el-input v-model="formData.sort" placeholder="请输入排序" />
      </el-form-item>
      <el-form-item label="状态：1启用 0停用" prop="status">
        <el-radio-group v-model="formData.status">
          <el-radio value="1">请选择字典生成</el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item label="备注" prop="remark">
        <el-input v-model="formData.remark" placeholder="请输入备注" />
      </el-form-item>
      <el-form-item label="创建时间" prop="createtime">
        <el-date-picker
          v-model="formData.createtime"
          type="date"
          value-format="x"
          placeholder="选择创建时间"
        />
      </el-form-item>
      <el-form-item label="更新时间" prop="updatetime">
        <el-date-picker
          v-model="formData.updatetime"
          type="date"
          value-format="x"
          placeholder="选择更新时间"
        />
      </el-form-item>
      <el-form-item label="租户编号" prop="tenantid">
        <el-input v-model="formData.tenantid" placeholder="请输入租户编号" />
      </el-form-item>
    </el-form>
    <template #footer>
      <el-button @click="submitForm" type="primary" :disabled="formLoading">确 定</el-button>
      <el-button @click="dialogVisible = false">取 消</el-button>
    </template>
  </Dialog>
</template>
<script setup lang="ts">
import { SkuGrantRuleApi, SkuGrantRule } from '@/api/asset/skugrantrule'

/** SKU资产发放规则 表单 */
defineOptions({ name: 'SkuGrantRuleForm' })

const { t } = useI18n() // 国际化
const message = useMessage() // 消息弹窗

const dialogVisible = ref(false) // 弹窗的是否展示
const dialogTitle = ref('') // 弹窗的标题
const formLoading = ref(false) // 表单的加载中：1）修改时的数据加载；2）提交的按钮禁用
const formType = ref('') // 表单的类型：create - 新增；update - 修改
const formData = ref({
  id: undefined,
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
  fixedExpireTime: undefined,
  expireDays: undefined,
  sort: undefined,
  status: undefined,
  remark: undefined,
  createtime: undefined,
  updatetime: undefined,
  tenantid: undefined
})
const formRules = reactive({
  spuId: [{ required: true, message: '商品SPU ID不能为空', trigger: 'blur' }],
  skuId: [{ required: true, message: '商品SKU ID不能为空', trigger: 'blur' }],
  assetId: [{ required: true, message: '资产定义ID不能为空', trigger: 'blur' }],
  assetCodeSnapshot: [{ required: true, message: '资产编码快照不能为空', trigger: 'blur' }],
  assetNameSnapshot: [{ required: true, message: '资产名称快照不能为空', trigger: 'blur' }],
  fulfillmentType: [{ required: true, message: '履约类型快照：1QUOTA 2ACCESS 3APPOINTMENT不能为空', trigger: 'change' }],
  unitType: [{ required: true, message: '单位类型快照：1次 2份 3天 4月 5席位不能为空', trigger: 'change' }],
  grantMode: [{ required: true, message: '发放模式：1固定数量 2固定天数 3永久访问不能为空', trigger: 'blur' }],
  grantQuantity: [{ required: true, message: '发放数量；次数型/预约型使用不能为空', trigger: 'blur' }],
  grantDays: [{ required: true, message: '发放天数；访问型使用不能为空', trigger: 'blur' }],
  permanent: [{ required: true, message: '是否永久有效不能为空', trigger: 'blur' }],
  effectiveDelayDays: [{ required: true, message: '生效延迟天数不能为空', trigger: 'blur' }],
  expireRuleType: [{ required: true, message: '过期规则：0跟随资产定义 1永久 2固定时间 3领取后N天不能为空', trigger: 'change' }],
  sort: [{ required: true, message: '排序不能为空', trigger: 'blur' }],
  status: [{ required: true, message: '状态：1启用 0停用不能为空', trigger: 'blur' }],
  createtime: [{ required: true, message: '创建时间不能为空', trigger: 'blur' }],
  updatetime: [{ required: true, message: '更新时间不能为空', trigger: 'blur' }],
  tenantid: [{ required: true, message: '租户编号不能为空', trigger: 'blur' }]
})
const formRef = ref() // 表单 Ref

/** 打开弹窗 */
const open = async (type: string, id?: number) => {
  dialogVisible.value = true
  dialogTitle.value = t('action.' + type)
  formType.value = type
  resetForm()
  // 修改时，设置数据
  if (id) {
    formLoading.value = true
    try {
      formData.value = await SkuGrantRuleApi.getSkuGrantRule(id)
    } finally {
      formLoading.value = false
    }
  }
}
defineExpose({ open }) // 提供 open 方法，用于打开弹窗

/** 提交表单 */
const emit = defineEmits(['success']) // 定义 success 事件，用于操作成功后的回调
const submitForm = async () => {
  // 校验表单
  await formRef.value.validate()
  // 提交请求
  formLoading.value = true
  try {
    const data = formData.value as unknown as SkuGrantRule
    if (formType.value === 'create') {
      await SkuGrantRuleApi.createSkuGrantRule(data)
      message.success(t('common.createSuccess'))
    } else {
      await SkuGrantRuleApi.updateSkuGrantRule(data)
      message.success(t('common.updateSuccess'))
    }
    dialogVisible.value = false
    // 发送操作成功的事件
    emit('success')
  } finally {
    formLoading.value = false
  }
}

/** 重置表单 */
const resetForm = () => {
  formData.value = {
    id: undefined,
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
    fixedExpireTime: undefined,
    expireDays: undefined,
    sort: undefined,
    status: undefined,
    remark: undefined,
    createtime: undefined,
    updatetime: undefined,
    tenantid: undefined
  }
  formRef.value?.resetFields()
}
</script>