import request from '@/config/axios'
import type { Dayjs } from 'dayjs';

/** 用户资产账户信息 */
export interface UserAccount {
          id: number; // 用户资产账户编号
          userId?: number; // 用户编号
          assetId?: number; // 资产定义ID
          assetCodeSnapshot?: string; // 资产编码快照
          assetNameSnapshot?: string; // 资产名称快照
          assetType?: number; // 资产类型快照：1报告 2课程 3咨询 99其他
          fulfillmentType?: number; // 履约类型快照：1QUOTA 2ACCESS 3APPOINTMENT
          unitType?: number; // 单位类型快照：1次 2份 3天 4月 5席位
          totalQuantity?: number; // 累计发放数量
          usedQuantity?: number; // 累计已使用数量
          refundQuantity?: number; // 累计退款回退数量
          adjustQuantity?: number; // 累计人工调整数量
          remainQuantity?: number; // 当前剩余数量
          freezeQuantity?: number; // 冻结数量
          status?: number; // 状态：1正常 2冻结 3失效 4用尽
          effectiveTime: string | Dayjs; // 生效时间
          expireTime: string | Dayjs; // 过期时间
          lastGrantTime: string | Dayjs; // 最后发放时间
          lastUseTime: string | Dayjs; // 最后使用时间
          version?: number; // 乐观锁版本号
          remark: string; // 备注
          createtime?: string | Dayjs; // 创建时间
          updatetime?: string | Dayjs; // 更新时间
          tenantid?: number; // 租户编号
  }

// 用户资产账户 API
export const UserAccountApi = {
  // 查询用户资产账户分页
  getUserAccountPage: async (params: any) => {
    return await request.get({ url: `/asset/user-account/page`, params })
  },

  // 查询用户资产账户详情
  getUserAccount: async (id: number) => {
    return await request.get({ url: `/asset/user-account/get?id=` + id })
  },

  // 新增用户资产账户
  createUserAccount: async (data: UserAccount) => {
    return await request.post({ url: `/asset/user-account/create`, data })
  },

  // 修改用户资产账户
  updateUserAccount: async (data: UserAccount) => {
    return await request.put({ url: `/asset/user-account/update`, data })
  },

  // 删除用户资产账户
  deleteUserAccount: async (id: number) => {
    return await request.delete({ url: `/asset/user-account/delete?id=` + id })
  },

  /** 批量删除用户资产账户 */
  deleteUserAccountList: async (ids: number[]) => {
    return await request.delete({ url: `/asset/user-account/delete-list?ids=${ids.join(',')}` })
  },

  // 导出用户资产账户 Excel
  exportUserAccount: async (params) => {
    return await request.download({ url: `/asset/user-account/export-excel`, params })
  }
}