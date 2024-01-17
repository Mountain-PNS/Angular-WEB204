import { Component } from '@angular/core';
import { TypeMenu } from '../interface/TypeData';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
menus : TypeMenu [] = [
  {
    id: 1,
    title : "Trang chủ",
    url : "trang-chu",
    parent : 0
  },
  {
    id:2,
    title: "Dịch vụ",
    url : "dich-vu",
    parent : 0

  },
  {
    id:3,
    title : "Sản phẩm",
    url : "san-pham",
    parent : 0
  },
  {
    id:4,
    title : "Liên hệ",
    url : "lien-he",
    parent : 0
  },
  {
    id:4,
    title : "Hỏi Đáp",
    url : "hoi-dap",
    parent : 0
  }
]
}
