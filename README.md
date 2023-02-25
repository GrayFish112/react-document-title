
# react-document-title

Context for controlling document title across react pages.

  

**Using react-document-title context**
```
import useDocumentTitle from 'path/to/DocumentTitleContext';

export default function Component() {
const { setDocumentTitle } = useDocumentTitle();
setDocumentTitle('Page Title');
}
```
Title will be set when the component renders and reset to default whenever the page changes.
