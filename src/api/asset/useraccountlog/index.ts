import request from '@/config/axios'
import type { Dayjs } from 'dayjs';

/** 用户资产账户流水信息 */
export interface UserAccountLog {
          id: number; // 用户资产账户流水编号
          accountId?: number; // 用户资产账户ID
          userId?: number; // 用户编号
          assetId?: number; // 资产定义ID
          sourceId: number; // 资产来源ID
          changeNo?: string; // 变动流水号
          changeType?: number; // 变动类型：1发放 2扣减 3退款回退 4后台增加 5后台扣减 6过期 7冻结 8解冻 9激活
          changeQuantity?: number; // 本次变动数量，增加为正，扣减为负
          beforeQuantity?: number; // 变动前剩余数量
          afterQuantity?: number; // 变动后剩余数量
          bizType?: number; // 业务类型：1订单 2订单项 3售后 4报告任务 5课程开通 6咨询预约 7后台
          bizId: number; // 业务ID
          bizItemId: number; // 业务明细ID
          bizNo: string; // 业务单号
          operatorUserId: number; // 操作人ID
          operatorUserType: number; // 操作人类型
          remark: string; // 备注
          operateTime?: string | Dayjs; // 操作时间
          createtime?: string | Dayjs; // 创建时间
          updatetime?: string | Dayjs; // 更新时间
          tenantid?: number; // 租户编号
  }

// 用户资产账户流水 API
export const UserAccountLogApi = {
  // 查询用户资产账户流水分页
  getUserAccountLogPage: async (params: any) => {
    return await request.get({ url: `/asset/user-account-log/page`, params })
  },

  // 查询用户资产账户流水详情
  getUserAccountLog: async (id: number) => {
    return await request.get({ url: `/asset/user-account-log/get?id=` + id })
  },

  // 新增用户资产账户流水
  createUserAccountLog: async (data: UserAccountLog) => {
    return await request.post({ url: `/asset/user-account-log/create`, data })
  },

  // 修改用户资产账户流水
  updateUserAccountLog: async (data: UserAccountLog) => {
    return await request.put({ url: `/asset/user-account-log/update`, data })
  },

  // 删除用户资产账户流水
  deleteUserAccountLog: async (id: number) => {
    return await request.delete({ url: `/asset/user-account-log/delete?id=` + id })
  },

  /** 批量删除用户资产账户流水 */
  deleteUserAccountLogList: async (ids: number[]) => {
    return await request.delete({ url: `/asset/user-account-log/delete-list?ids=${ids.join(',')}` })
  },

  // 导出用户资产账户流水 Excel
  exportUserAccountLog: async (params) => {
    return await request.download({ url: `/asset/user-account-log/export-excel`, params })
  }
}