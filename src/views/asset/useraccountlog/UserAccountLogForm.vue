<template>
  <Dialog :title="dialogTitle" v-model="dialogVisible">
    <el-form
      ref="formRef"
      :model="formData"
      :rules="formRules"
      label-width="100px"
      v-loading="formLoading"
    >
      <el-form-item label="用户资产账户ID" prop="accountId">
        <el-input v-model="formData.accountId" placeholder="请输入用户资产账户ID" />
      </el-form-item>
      <el-form-item label="用户编号" prop="userId">
        <el-input v-model="formData.userId" placeholder="请输入用户编号" />
      </el-form-item>
      <el-form-item label="资产定义ID" prop="assetId">
        <el-input v-model="formData.assetId" placeholder="请输入资产定义ID" />
      </el-form-item>
      <el-form-item label="资产来源ID" prop="sourceId">
        <el-input v-model="formData.sourceId" placeholder="请输入资产来源ID" />
      </el-form-item>
      <el-form-item label="变动流水号" prop="changeNo">
        <el-input v-model="formData.changeNo" placeholder="请输入变动流水号" />
      </el-form-item>
      <el-form-item label="变动类型：1发放 2扣减 3退款回退 4后台增加 5后台扣减 6过期 7冻结 8解冻 9激活" prop="changeType">
        <el-select v-model="formData.changeType" placeholder="请选择变动类型：1发放 2扣减 3退款回退 4后台增加 5后台扣减 6过期 7冻结 8解冻 9激活">
          <el-option label="请选择字典生成" value="" />
        </el-select>
      </el-form-item>
      <el-form-item label="本次变动数量，增加为正，扣减为负" prop="changeQuantity">
        <el-input v-model="formData.changeQuantity" placeholder="请输入本次变动数量，增加为正，扣减为负" />
      </el-form-item>
      <el-form-item label="变动前剩余数量" prop="beforeQuantity">
        <el-input v-model="formData.beforeQuantity" placeholder="请输入变动前剩余数量" />
      </el-form-item>
      <el-form-item label="变动后剩余数量" prop="afterQuantity">
        <el-input v-model="formData.afterQuantity" placeholder="请输入变动后剩余数量" />
      </el-form-item>
      <el-form-item label="业务类型：1订单 2订单项 3售后 4报告任务 5课程开通 6咨询预约 7后台" prop="bizType">
        <el-select v-model="formData.bizType" placeholder="请选择业务类型：1订单 2订单项 3售后 4报告任务 5课程开通 6咨询预约 7后台">
          <el-option label="请选择字典生成" value="" />
        </el-select>
      </el-form-item>
      <el-form-item label="业务ID" prop="bizId">
        <el-input v-model="formData.bizId" placeholder="请输入业务ID" />
      </el-form-item>
      <el-form-item label="业务明细ID" prop="bizItemId">
        <el-input v-model="formData.bizItemId" placeholder="请输入业务明细ID" />
      </el-form-item>
      <el-form-item label="业务单号" prop="bizNo">
        <el-input v-model="formData.bizNo" placeholder="请输入业务单号" />
      </el-form-item>
      <el-form-item label="操作人ID" prop="operatorUserId">
        <el-input v-model="formData.operatorUserId" placeholder="请输入操作人ID" />
      </el-form-item>
      <el-form-item label="操作人类型" prop="operatorUserType">
        <el-select v-model="formData.operatorUserType" placeholder="请选择操作人类型">
          <el-option label="请选择字典生成" value="" />
        </el-select>
      </el-form-item>
      <el-form-item label="备注" prop="remark">
        <el-input v-model="formData.remark" placeholder="请输入备注" />
      </el-form-item>
      <el-form-item label="操作时间" prop="operateTime">
        <el-date-picker
          v-model="formData.operateTime"
          type="date"
          value-format="x"
          placeholder="选择操作时间"
        />
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
import { UserAccountLogApi, UserAccountLog } from '@/api/asset/useraccountlog'

/** 用户资产账户流水 表单 */
defineOptions({ name: 'UserAccountLogForm' })

const { t } = useI18n() // 国际化
const message = useMessage() // 消息弹窗

const dialogVisible = ref(false) // 弹窗的是否展示
const dialogTitle = ref('') // 弹窗的标题
const formLoading = ref(false) // 表单的加载中：1）修改时的数据加载；2）提交的按钮禁用
const formType = ref('') // 表单的类型：create - 新增；update - 修改
const formData = ref({
  id: undefined,
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
  operateTime: undefined,
  createtime: undefined,
  updatetime: undefined,
  tenantid: undefined
})
const formRules = reactive({
  accountId: [{ required: true, message: '用户资产账户ID不能为空', trigger: 'blur' }],
  userId: [{ required: true, message: '用户编号不能为空', trigger: 'blur' }],
  assetId: [{ required: true, message: '资产定义ID不能为空', trigger: 'blur' }],
  changeNo: [{ required: true, message: '变动流水号不能为空', trigger: 'blur' }],
  changeType: [{ required: true, message: '变动类型：1发放 2扣减 3退款回退 4后台增加 5后台扣减 6过期 7冻结 8解冻 9激活不能为空', trigger: 'change' }],
  changeQuantity: [{ required: true, message: '本次变动数量，增加为正，扣减为负不能为空', trigger: 'blur' }],
  beforeQuantity: [{ required: true, message: '变动前剩余数量不能为空', trigger: 'blur' }],
  afterQuantity: [{ required: true, message: '变动后剩余数量不能为空', trigger: 'blur' }],
  bizType: [{ required: true, message: '业务类型：1订单 2订单项 3售后 4报告任务 5课程开通 6咨询预约 7后台不能为空', trigger: 'change' }],
  operateTime: [{ required: true, message: '操作时间不能为空', trigger: 'blur' }],
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
      formData.value = await UserAccountLogApi.getUserAccountLog(id)
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
    const data = formData.value as unknown as UserAccountLog
    if (formType.value === 'create') {
      await UserAccountLogApi.createUserAccountLog(data)
      message.success(t('common.createSuccess'))
    } else {
      await UserAccountLogApi.updateUserAccountLog(data)
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
    operateTime: undefined,
    createtime: undefined,
    updatetime: undefined,
    tenantid: undefined
  }
  formRef.value?.resetFields()
}
</script>