<template>
  <Dialog :title="dialogTitle" v-model="dialogVisible">
    <el-form
      ref="formRef"
      :model="formData"
      :rules="formRules"
      label-width="100px"
      v-loading="formLoading"
    >
      <el-form-item label="用户编号" prop="userId">
        <el-input v-model="formData.userId" placeholder="请输入用户编号" />
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
      <el-form-item label="资产类型快照：1报告 2课程 3咨询 99其他" prop="assetType">
        <el-select v-model="formData.assetType" placeholder="请选择资产类型快照：1报告 2课程 3咨询 99其他">
          <el-option label="请选择字典生成" value="" />
        </el-select>
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
      <el-form-item label="累计发放数量" prop="totalQuantity">
        <el-input v-model="formData.totalQuantity" placeholder="请输入累计发放数量" />
      </el-form-item>
      <el-form-item label="累计已使用数量" prop="usedQuantity">
        <el-input v-model="formData.usedQuantity" placeholder="请输入累计已使用数量" />
      </el-form-item>
      <el-form-item label="累计退款回退数量" prop="refundQuantity">
        <el-input v-model="formData.refundQuantity" placeholder="请输入累计退款回退数量" />
      </el-form-item>
      <el-form-item label="累计人工调整数量" prop="adjustQuantity">
        <el-input v-model="formData.adjustQuantity" placeholder="请输入累计人工调整数量" />
      </el-form-item>
      <el-form-item label="当前剩余数量" prop="remainQuantity">
        <el-input v-model="formData.remainQuantity" placeholder="请输入当前剩余数量" />
      </el-form-item>
      <el-form-item label="冻结数量" prop="freezeQuantity">
        <el-input v-model="formData.freezeQuantity" placeholder="请输入冻结数量" />
      </el-form-item>
      <el-form-item label="状态：1正常 2冻结 3失效 4用尽" prop="status">
        <el-radio-group v-model="formData.status">
          <el-radio value="1">请选择字典生成</el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item label="生效时间" prop="effectiveTime">
        <el-date-picker
          v-model="formData.effectiveTime"
          type="date"
          value-format="x"
          placeholder="选择生效时间"
        />
      </el-form-item>
      <el-form-item label="过期时间" prop="expireTime">
        <el-date-picker
          v-model="formData.expireTime"
          type="date"
          value-format="x"
          placeholder="选择过期时间"
        />
      </el-form-item>
      <el-form-item label="最后发放时间" prop="lastGrantTime">
        <el-date-picker
          v-model="formData.lastGrantTime"
          type="date"
          value-format="x"
          placeholder="选择最后发放时间"
        />
      </el-form-item>
      <el-form-item label="最后使用时间" prop="lastUseTime">
        <el-date-picker
          v-model="formData.lastUseTime"
          type="date"
          value-format="x"
          placeholder="选择最后使用时间"
        />
      </el-form-item>
      <el-form-item label="乐观锁版本号" prop="version">
        <el-input v-model="formData.version" placeholder="请输入乐观锁版本号" />
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
import { UserAccountApi, UserAccount } from '@/api/asset/useraccount'

/** 用户资产账户 表单 */
defineOptions({ name: 'UserAccountForm' })

const { t } = useI18n() // 国际化
const message = useMessage() // 消息弹窗

const dialogVisible = ref(false) // 弹窗的是否展示
const dialogTitle = ref('') // 弹窗的标题
const formLoading = ref(false) // 表单的加载中：1）修改时的数据加载；2）提交的按钮禁用
const formType = ref('') // 表单的类型：create - 新增；update - 修改
const formData = ref({
  id: undefined,
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
  effectiveTime: undefined,
  expireTime: undefined,
  lastGrantTime: undefined,
  lastUseTime: undefined,
  version: undefined,
  remark: undefined,
  createtime: undefined,
  updatetime: undefined,
  tenantid: undefined
})
const formRules = reactive({
  userId: [{ required: true, message: '用户编号不能为空', trigger: 'blur' }],
  assetId: [{ required: true, message: '资产定义ID不能为空', trigger: 'blur' }],
  assetCodeSnapshot: [{ required: true, message: '资产编码快照不能为空', trigger: 'blur' }],
  assetNameSnapshot: [{ required: true, message: '资产名称快照不能为空', trigger: 'blur' }],
  assetType: [{ required: true, message: '资产类型快照：1报告 2课程 3咨询 99其他不能为空', trigger: 'change' }],
  fulfillmentType: [{ required: true, message: '履约类型快照：1QUOTA 2ACCESS 3APPOINTMENT不能为空', trigger: 'change' }],
  unitType: [{ required: true, message: '单位类型快照：1次 2份 3天 4月 5席位不能为空', trigger: 'change' }],
  totalQuantity: [{ required: true, message: '累计发放数量不能为空', trigger: 'blur' }],
  usedQuantity: [{ required: true, message: '累计已使用数量不能为空', trigger: 'blur' }],
  refundQuantity: [{ required: true, message: '累计退款回退数量不能为空', trigger: 'blur' }],
  adjustQuantity: [{ required: true, message: '累计人工调整数量不能为空', trigger: 'blur' }],
  remainQuantity: [{ required: true, message: '当前剩余数量不能为空', trigger: 'blur' }],
  freezeQuantity: [{ required: true, message: '冻结数量不能为空', trigger: 'blur' }],
  status: [{ required: true, message: '状态：1正常 2冻结 3失效 4用尽不能为空', trigger: 'blur' }],
  version: [{ required: true, message: '乐观锁版本号不能为空', trigger: 'blur' }],
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
      formData.value = await UserAccountApi.getUserAccount(id)
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
    const data = formData.value as unknown as UserAccount
    if (formType.value === 'create') {
      await UserAccountApi.createUserAccount(data)
      message.success(t('common.createSuccess'))
    } else {
      await UserAccountApi.updateUserAccount(data)
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
    effectiveTime: undefined,
    expireTime: undefined,
    lastGrantTime: undefined,
    lastUseTime: undefined,
    version: undefined,
    remark: undefined,
    createtime: undefined,
    updatetime: undefined,
    tenantid: undefined
  }
  formRef.value?.resetFields()
}
</script>