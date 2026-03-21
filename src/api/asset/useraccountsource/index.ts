import request from '@/config/axios'
import type { Dayjs } from 'dayjs';

/** 用户资产来源信息 */
export interface UserAccountSource {
          id: number; // 用户资产来源编号
          accountId?: number; // 用户资产账户ID
          userId?: number; // 用户编号
          assetId?: number; // 资产定义ID
          sourceType?: number; // 来源类型：1订单购买 2活动赠送 3后台赠送 4退款回退 5补发
          sourceId: number; // 来源业务ID
          sourceItemId: number; // 来源业务明细ID
          sourceNo: string; // 来源单号
          orderId: number; // 订单ID
          orderItemId: number; // 订单项ID
          spuId: number; // 商品SPU ID
          skuId: number; // 商品SKU ID
          grantMode?: number; // 发放模式：1固定数量 2固定天数 3永久访问
          grantQuantity?: number; // 本来源发放数量
          usedQuantity?: number; // 本来源已使用数量
          remainQuantity?: number; // 本来源剩余数量
          grantDays?: number; // 本来源发放天数
          permanent?: boolean; // 是否永久有效
          effectiveTime: string | Dayjs; // 生效时间
          expireTime: string | Dayjs; // 过期时间
          status?: number; // 状态：1正常 2已用尽 3已退完 4已失效
          remark: string; // 备注
          createtime?: string | Dayjs; // 创建时间
          updatetime?: string | Dayjs; // 更新时间
          tenantid?: number; // 租户编号
  }

// 用户资产来源 API
export const UserAccountSourceApi = {
  // 查询用户资产来源分页
  getUserAccountSourcePage: async (params: any) => {
    return await request.get({ url: `/asset/user-account-source/page`, params })
  },

  // 查询用户资产来源详情
  getUserAccountSource: async (id: number) => {
    return await request.get({ url: `/asset/user-account-source/get?id=` + id })
  },

  // 新增用户资产来源
  createUserAccountSource: async (data: UserAccountSource) => {
    return await request.post({ url: `/asset/user-account-source/create`, data })
  },

  // 修改用户资产来源
  updateUserAccountSource: async (data: UserAccountSource) => {
    return await request.put({ url: `/asset/user-account-source/update`, data })
  },

  // 删除用户资产来源
  deleteUserAccountSource: async (id: number) => {
    return await request.delete({ url: `/asset/user-account-source/delete?id=` + id })
  },

  /** 批量删除用户资产来源 */
  deleteUserAccountSourceList: async (ids: number[]) => {
    return await request.delete({ url: `/asset/user-account-source/delete-list?ids=${ids.join(',')}` })
  },

  // 导出用户资产来源 Excel
  exportUserAccountSource: async (params) => {
    return await request.download({ url: `/asset/user-account-source/export-excel`, params })
  }
}