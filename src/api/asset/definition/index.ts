import request from '@/config/axios'
import type { Dayjs } from 'dayjs';

/** 资产定义信息 */
export interface Definition {
          id: number; // 资产定义编号
          code?: string; // 资产编码
          name?: string; // 资产名称
          assetType?: number; // 资产类型：1报告 2课程 3咨询 99其他
          fulfillmentType?: number; // 履约类型：1QUOTA次数型 2ACCESS访问型 3APPOINTMENT预约型
          unitType?: number; // 单位类型：1次 2份 3天 4月 5席位
          expireRuleType?: number; // 过期规则：1永久 2固定时间 3领取后N天
          fixedExpireTime: string | Dayjs; // 固定过期时间
          expireDays: number; // 领取后有效天数
          supportRefund?: boolean; // 是否支持退款回退
          supportTransfer?: boolean; // 是否支持转移
          status?: number; // 状态：1启用 0停用
          remark: string; // 备注
          createtime?: string | Dayjs; // 创建时间
          updatetime?: string | Dayjs; // 更新时间
          tenantid?: number; // 租户编号
  }

// 资产定义 API
export const DefinitionApi = {
  // 查询资产定义分页
  getDefinitionPage: async (params: any) => {
    return await request.get({ url: `/asset/definition/page`, params })
  },

  // 查询资产定义详情
  getDefinition: async (id: number) => {
    return await request.get({ url: `/asset/definition/get?id=` + id })
  },

  // 新增资产定义
  createDefinition: async (data: Definition) => {
    return await request.post({ url: `/asset/definition/create`, data })
  },

  // 修改资产定义
  updateDefinition: async (data: Definition) => {
    return await request.put({ url: `/asset/definition/update`, data })
  },

  // 删除资产定义
  deleteDefinition: async (id: number) => {
    return await request.delete({ url: `/asset/definition/delete?id=` + id })
  },

  /** 批量删除资产定义 */
  deleteDefinitionList: async (ids: number[]) => {
    return await request.delete({ url: `/asset/definition/delete-list?ids=${ids.join(',')}` })
  },

  // 导出资产定义 Excel
  exportDefinition: async (params) => {
    return await request.download({ url: `/asset/definition/export-excel`, params })
  }
}