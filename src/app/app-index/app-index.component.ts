import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'po-app-index',
  templateUrl: './app-index.component.html',
  styleUrls: ['./app-index.component.scss']
})
export class AppIndexComponent implements OnInit {

  public get interfaceCode(): string {
    return "public interface ITestKlasse\n{\n    Backfisch;\n}"
  }

  public get implementationCode(): string {
    return "public class TestKlasse\n{\n    Backfisch;\n}"
  }

  public get factoryMethodCode(): string {
    return "public class TestKlasse\n{\n    Backfisch;\n}"
  }

  public namespaceName?: string;
  public className?: string;
  public baseClassName = "PageObjectBase";

  constructor() { }

  ngOnInit(): void {
  }

}
