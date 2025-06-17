import React from 'react';
import '../pages/style/homepage.scss';
import '../pages/style/zalopage.scss';
import '../pages/style/admin.scss';


const MessagePage = React.lazy(() => import('../pages/admin/MessagePage'));
const SoftwareCodePage = React.lazy(() => import('../pages/admin/SoftwareCodePage'));
const AccountAdminPage = React.lazy(() => import('../pages/admin/AccountPage'));
const CodeCreate = React.lazy(() => import('../pages/admin/CodeCreate'));
const CreateUpdateMs = React.lazy(() => import('../pages/admin/CreateUpdateMS'));
const AdminSetting = React.lazy(() => import('../pages/admin/AdminSetting'));
const ChangePassword = React.lazy(() => import('../pages/admin/ChangePassword'));

const routes = [
  { path: '/admin/msms', exact: true, name: 'MessagePage', component: MessagePage },
  { path: '/admin/dashboard', exact: true, name: 'SoftwareCodePage', component: SoftwareCodePage },
  { path: '/admin/member', exact: true, name: 'AccountAdminPage', component: AccountAdminPage },
  { path: '/admin/code/add', exact: true, name: 'CodeCreate', component: CodeCreate },
  { path: '/admin/code/add/:id', exact: true, name: 'CodeCreate', component: CodeCreate },
  { path: '/admin/msms/create', exact: true, name: 'CreateUpdateMs', component: CreateUpdateMs },
  { path: '/admin/msms/edit/:id', exact: true, name: 'CreateUpdateMs', component: CreateUpdateMs },
  { path: '/admin/setting', exact: true, name: 'AdminSetting', component: AdminSetting },
  { path: '/admin/change-password', exact: true, name: 'ChangePassword', component: ChangePassword },
];

export default routes;
