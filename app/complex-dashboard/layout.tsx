import {ReactNode} from "react";

export default function ComplexDashboardLayout(
  {
    children,
    notifications,
    revenue,
    users
  }: {
    children: ReactNode,
    notifications: ReactNode,
    revenue: ReactNode,
    users: ReactNode
  }
  ) {
  return <>
    {children}
    <div style={{display: 'flex'}}>
      <div style={{display: 'flex', flexDirection: 'column'}}>
        <div>{users}</div>
        <div>{revenue}</div>
      </div>
      <div style={{display: 'flex', flex: 1}}>{notifications}</div>
    </div>
  </>
}
