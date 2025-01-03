import { AxiosResponse } from 'axios';

export function downloadFile(url: string, filename: string) {
  const a = document.createElement('a');

  a.style.display = 'none';
  a.href = url;
  a.download = filename;

  document.body.appendChild(a);

  a.click();

  document.body.removeChild(a);
}

export function downloadExcel(response: AxiosResponse<Blob>) {
  const disposition = response.headers['content-disposition'];
  let filename = '';
  if (disposition && disposition.indexOf('attachment') !== -1) {
    const filenameRegex = /filename[^;=\n]*=((['"]).*?\2|[^;\n]*)/;
    const matches = filenameRegex.exec(disposition);
    if (matches != null && matches[1]) {
      filename = matches[1].replace(/['"]/g, '');
    }
  }

  const blob = new Blob([response.data], { type: 'application/xlsx' });
  const link = document.createElement('a');
  link.href = window.URL.createObjectURL(blob);
  link.download = filename;
  link.click();
  window.URL.revokeObjectURL(link.href);
}

export function downloadPdf(response: Blob, title: string) {
  const blob = new Blob([response], { type: 'application/pdf' });
  const url = window.URL.createObjectURL(blob);

  const newWindow = window.open(url, '_blank');
  if (newWindow) {
    newWindow.document.title = title;
    newWindow.onload = function () {
      setTimeout(function () {
        window.URL.revokeObjectURL(url);
      }, 100);
    };
  }
}
