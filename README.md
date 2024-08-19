## 사용법

```javascript
// Provider.tsx
const Provider = ({ children }: { children: ReactNode }) => {
  return <AlertConfirmPromptProvider>{children}</AlertConfirmPromptProvider>
}
```

```javascript
// Component.tsx
const Component = () => {
  const { alert, confirm, prompt } = useAlertConfirmPrompt();

  const handleClick = async() => {
    const result = await alert('what is your name?', { title: 'sdf' });
    console.log('custom', result);
  }

  return <button type='button' onClick={handleClick}>alert</button>;
}
```
