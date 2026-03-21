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
      <el-form-item label="资产来源ID" prop="sourceId">
        <el-input v-model="formData.sourceId" placeholder="请输入资产来源ID" />
      </el-form-item>
      <el-form-item label="用户编号" prop="userId">
        <el-input v-model="formData.userId" placeholder="请输入用户编号" />
      </el-form-item>
      <el-form-item label="资产定义ID" prop="assetId">
        <el-input v-model="formData.assetId" placeholder="请输入资产定义ID" />
      </el-form-item>
      <el-form-item label="使用流水号" prop="usageNo">
        <el-input v-model="formData.usageNo" placeholder="请输入使用流水号" />
      </el-form-item>
      <el-form-item label="使用类型：1消费 2激活 3预约 4核销 5取消 6回退" prop="usageType">
        <el-select v-model="formData.usageType" placeholder="请选择使用类型：1消费 2激活 3预约 4核销 5取消 6回退">
          <el-option label="请选择字典生成" value="" />
        </el-select>
      </el-form-item>
      <el-form-item label="本次消耗数量" prop="consumeQuantity">
        <el-input v-model="formData.consumeQuantity" placeholder="请输入本次消耗数量" />
      </el-form-item>
      <el-form-item label="业务类型：1报告任务 2课程开通 3课程学习 4咨询预约 5后台" prop="bizType">
        <el-select v-model="formData.bizType" placeholder="请选择业务类型：1报告任务 2课程开通 3课程学习 4咨询预约 5后台">
          <el-option label="请选择字典生成" value="" />
        </el-select>
      </el-form-item>
      <el-form-item label="业务ID" prop="bizId">
        <el-input v-model="formData.bizId" placeholder="请输入业务ID" />
      </el-form-item>
      <el-form-item label="业务单号" prop="bizNo">
        <el-input v-model="formData.bizNo" placeholder="请输入业务单号" />
      </el-form-item>
      <el-form-item label="状态：1待处理 2处理中 3成功 4取消 5失败" prop="status">
        <el-radio-group v-model="formData.status">
          <el-radio value="1">请选择字典生成</el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item label="预约/计划时间" prop="scheduledTime">
        <el-date-picker
          v-model="formData.scheduledTime"
          type="date"
          value-format="x"
          placeholder="选择预约/计划时间"
        />
      </el-form-item>
      <el-form-item label="实际使用时间" prop="usedTime">
        <el-date-picker
          v-model="formData.usedTime"
          type="date"
          value-format="x"
          placeholder="选择实际使用时间"
        />
      </el-form-item>
      <el-form-item label="完成时间" prop="finishTime">
        <el-date-picker
          v-model="formData.finishTime"
          type="date"
          value-format="x"
          placeholder="选择完成时间"
        />
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
import { UsageRecordApi, UsageRecord } from '@/api/asset/usagerecord'

/** 资产使用记录 表单 */
defineOptions({ name: 'UsageRecordForm' })

const { t } = useI18n() // 国际化
const message = useMessage() // 消息弹窗

const dialogVisible = ref(false) // 弹窗的是否展示
const dialogTitle = ref('') // 弹窗的标题
const formLoading = ref(false) // 表单的加载中：1）修改时的数据加载；2）提交的按钮禁用
const formType = ref('') // 表单的类型：create - 新增；update - 修改
const formData = ref({
  id: undefined,
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
  scheduledTime: undefined,
  usedTime: undefined,
  finishTime: undefined,
  remark: undefined,
  createtime: undefined,
  updatetime: undefined,
  tenantid: undefined
})
const formRules = reactive({
  accountId: [{ required: true, message: '用户资产账户ID不能为空', trigger: 'blur' }],
  userId: [{ required: true, message: '用户编号不能为空', trigger: 'blur' }],
  assetId: [{ required: true, message: '资产定义ID不能为空', trigger: 'blur' }],
  usageNo: [{ required: true, message: '使用流水号不能为空', trigger: 'blur' }],
  usageType: [{ required: true, message: '使用类型：1消费 2激活 3预约 4核销 5取消 6回退不能为空', trigger: 'change' }],
  consumeQuantity: [{ required: true, message: '本次消耗数量不能为空', trigger: 'blur' }],
  bizType: [{ required: true, message: '业务类型：1报告任务 2课程开通 3课程学习 4咨询预约 5后台不能为空', trigger: 'change' }],
  status: [{ required: true, message: '状态：1待处理 2处理中 3成功 4取消 5失败不能为空', trigger: 'blur' }],
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
      formData.value = await UsageRecordApi.getUsageRecord(id)
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
    const data = formData.value as unknown as UsageRecord
    if (formType.value === 'create') {
      await UsageRecordApi.createUsageRecord(data)
      message.success(t('common.createSuccess'))
    } else {
      await UsageRecordApi.updateUsageRecord(data)
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
    scheduledTime: undefined,
    usedTime: undefined,
    finishTime: undefined,
    remark: undefined,
    createtime: undefined,
    updatetime: undefined,
    tenantid: undefined
  }
  formRef.value?.resetFields()
}
</script>