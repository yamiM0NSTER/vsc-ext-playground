import * as vscode from 'vscode';
import {
  UPDATE_TITLE,
  BUTTONS,
  SEVERITY,
  ValidatorResponseItem,
  WebviewWizard,
  WizardDefinition,
  IWizardPage,
  PerformFinishResponse,
} from '@redhat-developer/vscode-wizard';
import { FieldDefinitionState } from '@redhat-developer/vscode-wizard/lib/WebviewWizard';

export async function openWizardWebview(context: vscode.ExtensionContext) {
  const wizard = getWizardSample(context);
  wizard.open();
}

function getWizardSample(context: vscode.ExtensionContext) {
  const WizardDefinition: WizardDefinition = {
    title: 'Sample Wizard Webview',
    pages: [
      {
        id: 'samplePage',
        fields: [
          {
            id: 'addusername',
            label: 'Username',
            type: 'textbox',
          },
          {
            id: 'someFilePicker',
            label: 'A File Picker:',
            initialValue: '',
            type: 'file-picker',
            placeholder: 'Select file in PEM format.',
            dialogOptions: {
              canSelectMany: false,
              filters: {
                All: ['*'],
                PEM: ['pem', 'crt', 'cer', 'key'],
              },
            },
          },
        ],
      },
    ],
    workflowManager: {
      canFinish(wizard: WebviewWizard, data: any) {
        return data.addusername !== undefined;
      },
      performFinish(wizard: WebviewWizard, data: any) {
        vscode.window.showInformationMessage('Finishing wizard webview...');
        return new Promise<PerformFinishResponse | null>((res, rej) => {
          res(null);
        });
      },
    },
  };
  let wizardData = new Map<string, string>();
  const wizard: WebviewWizard = new WebviewWizard(
    'sample1',
    'sample1',
    context,
    WizardDefinition,
    wizardData
  );
  return wizard;
}
