import { Routes } from '@angular/router';
// ลบคำว่า pages/ ออก เพราะเราย้ายโฟลเดอร์มาแล้ว
import { AssignmentPageComponent } from './pages/assignment-display-page/assignment-display-page';

export default [{ path: '', component: AssignmentPageComponent }] as Routes;
