import request from '@/config/axios'
import type { Dayjs } from 'dayjs';

/** SKU资产发放规则信息 */
export interface SkuGrantRule {
          id: number; // SKU资产发放规则编号
          spuId?: number; // 商品SPU ID
          skuId?: number; // 商品SKU ID
          assetId?: number; // 资产定义ID
          assetCodeSnapshot?: string; // 资产编码快照
          assetNameSnapshot?: string; // 资产名称快照
          fulfillmentType?: number; // 履约类型快照：1QUOTA 2ACCESS 3APPOINTMENT
          unitType?: number; // 单位类型快照：1次 2份 3天 4月 5席位
          grantMode?: number; // 发放模式：1固定数量 2固定天数 3永久访问
          grantQuantity?: number; // 发放数量；次数型/预约型使用
          grantDays?: number; // 发放天数；访问型使用
          permanent?: boolean; // 是否永久有效
          effectiveDelayDays?: number; // 生效延迟天数
          expireRuleType?: number; // 过期规则：0跟随资产定义 1永久 2固定时间 3领取后N天
          fixedExpireTime: string | Dayjs; // 固定过期时间
          expireDays: number; // 领取后有效天数
          sort?: number; // 排序
          status?: number; // 状态：1启用 0停用
          remark: string; // 备注
          createtime?: string | Dayjs; // 创建时间
          updatetime?: string | Dayjs; // 更新时间
          tenantid?: number; // 租户编号
  }

// SKU资产发放规则 API
export const SkuGrantRuleApi = {
  // 查询SKU资产发放规则分页
  getSkuGrantRulePage: async (params: any) => {
    return await request.get({ url: `/asset/sku-grant-rule/page`, params })
  },

  // 查询SKU资产发放规则详情
  getSkuGrantRule: async (id: number) => {
    return await request.get({ url: `/asset/sku-grant-rule/get?id=` + id })
  },

  // 新增SKU资产发放规则
  createSkuGrantRule: async (data: SkuGrantRule) => {
    return await request.post({ url: `/asset/sku-grant-rule/create`, data })
  },

  // 修改SKU资产发放规则
  updateSkuGrantRule: async (data: SkuGrantRule) => {
    return await request.put({ url: `/asset/sku-grant-rule/update`, data })
  },

  // 删除SKU资产发放规则
  deleteSkuGrantRule: async (id: number) => {
    return await request.delete({ url: `/asset/sku-grant-rule/delete?id=` + id })
  },

  /** 批量删除SKU资产发放规则 */
  deleteSkuGrantRuleList: async (ids: number[]) => {
    return await request.delete({ url: `/asset/sku-grant-rule/delete-list?ids=${ids.join(',')}` })
  },

  // 导出SKU资产发放规则 Excel
  exportSkuGrantRule: async (params) => {
    return await request.download({ url: `/asset/sku-grant-rule/export-excel`, params })
  }
}