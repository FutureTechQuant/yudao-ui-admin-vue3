import request from '@/config/axios'
import type { Dayjs } from 'dayjs';

/** 资产使用记录信息 */
export interface UsageRecord {
          id: number; // 资产使用记录编号
          accountId?: number; // 用户资产账户ID
          sourceId: number; // 资产来源ID
          userId?: number; // 用户编号
          assetId?: number; // 资产定义ID
          usageNo?: string; // 使用流水号
          usageType?: number; // 使用类型：1消费 2激活 3预约 4核销 5取消 6回退
          consumeQuantity?: number; // 本次消耗数量
          bizType?: number; // 业务类型：1报告任务 2课程开通 3课程学习 4咨询预约 5后台
          bizId: number; // 业务ID
          bizNo: string; // 业务单号
          status?: number; // 状态：1待处理 2处理中 3成功 4取消 5失败
          scheduledTime: string | Dayjs; // 预约/计划时间
          usedTime: string | Dayjs; // 实际使用时间
          finishTime: string | Dayjs; // 完成时间
          remark: string; // 备注
          createtime?: string | Dayjs; // 创建时间
          updatetime?: string | Dayjs; // 更新时间
          tenantid?: number; // 租户编号
  }

// 资产使用记录 API
export const UsageRecordApi = {
  // 查询资产使用记录分页
  getUsageRecordPage: async (params: any) => {
    return await request.get({ url: `/asset/usage-record/page`, params })
  },

  // 查询资产使用记录详情
  getUsageRecord: async (id: number) => {
    return await request.get({ url: `/asset/usage-record/get?id=` + id })
  },

  // 新增资产使用记录
  createUsageRecord: async (data: UsageRecord) => {
    return await request.post({ url: `/asset/usage-record/create`, data })
  },

  // 修改资产使用记录
  updateUsageRecord: async (data: UsageRecord) => {
    return await request.put({ url: `/asset/usage-record/update`, data })
  },

  // 删除资产使用记录
  deleteUsageRecord: async (id: number) => {
    return await request.delete({ url: `/asset/usage-record/delete?id=` + id })
  },

  /** 批量删除资产使用记录 */
  deleteUsageRecordList: async (ids: number[]) => {
    return await request.delete({ url: `/asset/usage-record/delete-list?ids=${ids.join(',')}` })
  },

  // 导出资产使用记录 Excel
  exportUsageRecord: async (params) => {
    return await request.download({ url: `/asset/usage-record/export-excel`, params })
  }
}