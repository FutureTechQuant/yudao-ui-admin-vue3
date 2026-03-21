<template>
  <Dialog :title="dialogTitle" v-model="dialogVisible">
    <el-form
      ref="formRef"
      :model="formData"
      :rules="formRules"
      label-width="100px"
      v-loading="formLoading"
    >
      <el-form-item label="资产编码" prop="code">
        <el-input v-model="formData.code" placeholder="请输入资产编码" />
      </el-form-item>
      <el-form-item label="资产名称" prop="name">
        <el-input v-model="formData.name" placeholder="请输入资产名称" />
      </el-form-item>
      <el-form-item label="资产类型：1报告 2课程 3咨询 99其他" prop="assetType">
        <el-select v-model="formData.assetType" placeholder="请选择资产类型：1报告 2课程 3咨询 99其他">
          <el-option label="请选择字典生成" value="" />
        </el-select>
      </el-form-item>
      <el-form-item label="履约类型：1QUOTA次数型 2ACCESS访问型 3APPOINTMENT预约型" prop="fulfillmentType">
        <el-select v-model="formData.fulfillmentType" placeholder="请选择履约类型：1QUOTA次数型 2ACCESS访问型 3APPOINTMENT预约型">
          <el-option label="请选择字典生成" value="" />
        </el-select>
      </el-form-item>
      <el-form-item label="单位类型：1次 2份 3天 4月 5席位" prop="unitType">
        <el-select v-model="formData.unitType" placeholder="请选择单位类型：1次 2份 3天 4月 5席位">
          <el-option label="请选择字典生成" value="" />
        </el-select>
      </el-form-item>
      <el-form-item label="过期规则：1永久 2固定时间 3领取后N天" prop="expireRuleType">
        <el-select v-model="formData.expireRuleType" placeholder="请选择过期规则：1永久 2固定时间 3领取后N天">
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
      <el-form-item label="是否支持退款回退" prop="supportRefund">
        <el-radio-group v-model="formData.supportRefund">
          <el-radio value="1">请选择字典生成</el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item label="是否支持转移" prop="supportTransfer">
        <el-radio-group v-model="formData.supportTransfer">
          <el-radio value="1">请选择字典生成</el-radio>
        </el-radio-group>
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
import { DefinitionApi, Definition } from '@/api/asset/definition'

/** 资产定义 表单 */
defineOptions({ name: 'DefinitionForm' })

const { t } = useI18n() // 国际化
const message = useMessage() // 消息弹窗

const dialogVisible = ref(false) // 弹窗的是否展示
const dialogTitle = ref('') // 弹窗的标题
const formLoading = ref(false) // 表单的加载中：1）修改时的数据加载；2）提交的按钮禁用
const formType = ref('') // 表单的类型：create - 新增；update - 修改
const formData = ref({
  id: undefined,
  code: undefined,
  name: undefined,
  assetType: undefined,
  fulfillmentType: undefined,
  unitType: undefined,
  expireRuleType: undefined,
  fixedExpireTime: undefined,
  expireDays: undefined,
  supportRefund: undefined,
  supportTransfer: undefined,
  status: undefined,
  remark: undefined,
  createtime: undefined,
  updatetime: undefined,
  tenantid: undefined
})
const formRules = reactive({
  code: [{ required: true, message: '资产编码不能为空', trigger: 'blur' }],
  name: [{ required: true, message: '资产名称不能为空', trigger: 'blur' }],
  assetType: [{ required: true, message: '资产类型：1报告 2课程 3咨询 99其他不能为空', trigger: 'change' }],
  fulfillmentType: [{ required: true, message: '履约类型：1QUOTA次数型 2ACCESS访问型 3APPOINTMENT预约型不能为空', trigger: 'change' }],
  unitType: [{ required: true, message: '单位类型：1次 2份 3天 4月 5席位不能为空', trigger: 'change' }],
  expireRuleType: [{ required: true, message: '过期规则：1永久 2固定时间 3领取后N天不能为空', trigger: 'change' }],
  supportRefund: [{ required: true, message: '是否支持退款回退不能为空', trigger: 'blur' }],
  supportTransfer: [{ required: true, message: '是否支持转移不能为空', trigger: 'blur' }],
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
      formData.value = await DefinitionApi.getDefinition(id)
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
    const data = formData.value as unknown as Definition
    if (formType.value === 'create') {
      await DefinitionApi.createDefinition(data)
      message.success(t('common.createSuccess'))
    } else {
      await DefinitionApi.updateDefinition(data)
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
    code: undefined,
    name: undefined,
    assetType: undefined,
    fulfillmentType: undefined,
    unitType: undefined,
    expireRuleType: undefined,
    fixedExpireTime: undefined,
    expireDays: undefined,
    supportRefund: undefined,
    supportTransfer: undefined,
    status: undefined,
    remark: undefined,
    createtime: undefined,
    updatetime: undefined,
    tenantid: undefined
  }
  formRef.value?.resetFields()
}
</script>