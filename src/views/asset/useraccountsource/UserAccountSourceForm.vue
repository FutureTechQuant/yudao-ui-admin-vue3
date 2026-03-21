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
      <el-form-item label="来源类型：1订单购买 2活动赠送 3后台赠送 4退款回退 5补发" prop="sourceType">
        <el-select v-model="formData.sourceType" placeholder="请选择来源类型：1订单购买 2活动赠送 3后台赠送 4退款回退 5补发">
          <el-option label="请选择字典生成" value="" />
        </el-select>
      </el-form-item>
      <el-form-item label="来源业务ID" prop="sourceId">
        <el-input v-model="formData.sourceId" placeholder="请输入来源业务ID" />
      </el-form-item>
      <el-form-item label="来源业务明细ID" prop="sourceItemId">
        <el-input v-model="formData.sourceItemId" placeholder="请输入来源业务明细ID" />
      </el-form-item>
      <el-form-item label="来源单号" prop="sourceNo">
        <el-input v-model="formData.sourceNo" placeholder="请输入来源单号" />
      </el-form-item>
      <el-form-item label="订单ID" prop="orderId">
        <el-input v-model="formData.orderId" placeholder="请输入订单ID" />
      </el-form-item>
      <el-form-item label="订单项ID" prop="orderItemId">
        <el-input v-model="formData.orderItemId" placeholder="请输入订单项ID" />
      </el-form-item>
      <el-form-item label="商品SPU ID" prop="spuId">
        <el-input v-model="formData.spuId" placeholder="请输入商品SPU ID" />
      </el-form-item>
      <el-form-item label="商品SKU ID" prop="skuId">
        <el-input v-model="formData.skuId" placeholder="请输入商品SKU ID" />
      </el-form-item>
      <el-form-item label="发放模式：1固定数量 2固定天数 3永久访问" prop="grantMode">
        <el-input v-model="formData.grantMode" placeholder="请输入发放模式：1固定数量 2固定天数 3永久访问" />
      </el-form-item>
      <el-form-item label="本来源发放数量" prop="grantQuantity">
        <el-input v-model="formData.grantQuantity" placeholder="请输入本来源发放数量" />
      </el-form-item>
      <el-form-item label="本来源已使用数量" prop="usedQuantity">
        <el-input v-model="formData.usedQuantity" placeholder="请输入本来源已使用数量" />
      </el-form-item>
      <el-form-item label="本来源剩余数量" prop="remainQuantity">
        <el-input v-model="formData.remainQuantity" placeholder="请输入本来源剩余数量" />
      </el-form-item>
      <el-form-item label="本来源发放天数" prop="grantDays">
        <el-input v-model="formData.grantDays" placeholder="请输入本来源发放天数" />
      </el-form-item>
      <el-form-item label="是否永久有效" prop="permanent">
        <el-radio-group v-model="formData.permanent">
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
      <el-form-item label="状态：1正常 2已用尽 3已退完 4已失效" prop="status">
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
import { UserAccountSourceApi, UserAccountSource } from '@/api/asset/useraccountsource'

/** 用户资产来源 表单 */
defineOptions({ name: 'UserAccountSourceForm' })

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
  effectiveTime: undefined,
  expireTime: undefined,
  status: undefined,
  remark: undefined,
  createtime: undefined,
  updatetime: undefined,
  tenantid: undefined
})
const formRules = reactive({
  accountId: [{ required: true, message: '用户资产账户ID不能为空', trigger: 'blur' }],
  userId: [{ required: true, message: '用户编号不能为空', trigger: 'blur' }],
  assetId: [{ required: true, message: '资产定义ID不能为空', trigger: 'blur' }],
  sourceType: [{ required: true, message: '来源类型：1订单购买 2活动赠送 3后台赠送 4退款回退 5补发不能为空', trigger: 'change' }],
  grantMode: [{ required: true, message: '发放模式：1固定数量 2固定天数 3永久访问不能为空', trigger: 'blur' }],
  grantQuantity: [{ required: true, message: '本来源发放数量不能为空', trigger: 'blur' }],
  usedQuantity: [{ required: true, message: '本来源已使用数量不能为空', trigger: 'blur' }],
  remainQuantity: [{ required: true, message: '本来源剩余数量不能为空', trigger: 'blur' }],
  grantDays: [{ required: true, message: '本来源发放天数不能为空', trigger: 'blur' }],
  permanent: [{ required: true, message: '是否永久有效不能为空', trigger: 'blur' }],
  status: [{ required: true, message: '状态：1正常 2已用尽 3已退完 4已失效不能为空', trigger: 'blur' }],
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
      formData.value = await UserAccountSourceApi.getUserAccountSource(id)
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
    const data = formData.value as unknown as UserAccountSource
    if (formType.value === 'create') {
      await UserAccountSourceApi.createUserAccountSource(data)
      message.success(t('common.createSuccess'))
    } else {
      await UserAccountSourceApi.updateUserAccountSource(data)
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
    effectiveTime: undefined,
    expireTime: undefined,
    status: undefined,
    remark: undefined,
    createtime: undefined,
    updatetime: undefined,
    tenantid: undefined
  }
  formRef.value?.resetFields()
}
</script>