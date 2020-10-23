# Storybook

## Angular

### Examples

```ts
export const Default = () => ({
  component: AttendeeCardComponent,
  props: {
    attendee: {
      name: 'Shane Williamson',
      title: 'CTO',
      company: 'Sonic',
      imgUrl: '',
    },
  },
});
```

```ts
storiesOf('Shared | Metric Card', module)
  .add('Default', () => ({
    moduleMetadata,
    template: `
      <cm-theme>
        <cm-metric-card icon="Flash" amount="36" unit="%" description="Matches Rate" ></cm-metric-card>
      </cm-theme>
    `,
  }));
```
