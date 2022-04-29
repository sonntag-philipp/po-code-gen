import { Injectable } from '@angular/core';
import { DotNetClassModel } from '../models/dotnet-class-model';
import { SelectorModel } from '../models/selector-model';
import { BaseCodeService } from './base-code.service';

@Injectable({
  providedIn: 'root'
})
export class ImplementationCodeService {

  constructor(
    private readonly _baseCodeService: BaseCodeService
  ) { }

  public generateCode(dotnetClassModel: DotNetClassModel): string {
    let code = "";

    if (!dotnetClassModel.className) {
      return "Please set a class name.";
    }

    code += `public class ${dotnetClassModel.className}\n`;
    code += `{\n`;
    code += this.generateClassBody(dotnetClassModel.selectors);
    code += `}\n`;

    
    return code;
  }

  private generateClassBody(selectors: SelectorModel[]): string {
    let code = "";
    if (!this.validateSelectors(selectors)) {
      return "Selectors are not valid. Please check for duplicates.";
    }

    for (const selector of selectors) {
      code += this.generateSelectorProperty(selector);
    }
    code += "\n";
    for (const selector of selectors) {
      if (selector.generateIsVisibleAsync) {
        code += this.generateIsVisibleMethod(selector);
      }
    }
    return code;
  }

  /**
   * 
   * @param selector 
        public string TabGroupSelector { get => $"{SelfSelector} #navigation-tab-group"; }
        public string PrioritisedIdentityContactButtonSelector { get => $"{SelfSelector} #prioritised-identity-contact-button"; }
        public string MainRouterOutletSelector { get => $"{SelfSelector} #main-router-outlet"; }
        public string SecondaryRouterOutletSelector { get => $"{SelfSelector} #secondary-router-outlet"; }
        public string TabInfoSelector { get => $"{SelfSelector} #navigation-tab-group #tab-info"; }
   * @returns 
   */

  private generateSelectorProperty(selector: SelectorModel): string {
    if (!selector.selector || !selector.propertyName) {
      return "";
    }

    if (selector.useSelfSelector) {
      return `    public string ${selector.propertyName} { get => $"{SelfSelector} ${selector.selector}"; }\n`;
    }
    return `    public string ${selector.propertyName} { get => $"${selector.selector}"; }\n`;
  }
  
  private generateIsVisibleMethod(selector: SelectorModel): string {
    if (!selector.selector || !selector.propertyName) {
      return "";
    }

    let code = "";
    code += `    public async Task<bool> Is${selector.propertyName}VisibleAsync()\n`;
    code += `    {\n`;
    code += `        return await Page.IsVisibleAsync(${selector.propertyName});\n`;
    code += `    }\n`;
    code += "\n";
    return code;
  }

  private validateSelectors(selectors: SelectorModel[]): boolean {
    const selectorNamesArray = selectors.map((selector) => selector.selector);
    const selectorPropertyNamesArray = selectors.map((selector) => selector.propertyName);

    const selectorNamesSet = new Set(selectorNamesArray);
    const selectorPropertyNamesSet = new Set(selectorPropertyNamesArray);

    return selectorNamesSet.size === selectorNamesArray.length && selectorPropertyNamesSet.size === selectorPropertyNamesArray.length;
  }
}
