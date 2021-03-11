# code null default components

Note: This project follows the [code null guidelines](https://github.com/code-null/organization/blob/main/guidelines.md) in version 1.0.0

This is a collection of default components, all styled based on the code null colors. The technology specified applies to all of them. It is meant for cases, where there is no other templating engine or style library involved.

## Status

Stage: Released

Latest Stable Version: 1.1.0

## Technical Details

| Segment   | Technical ID | Reference Name      | Official Name                | Type       | Requires Accounts | Technology      |
| --------- | ------------ | ------------------- | ---------------------------- | ---------- | ----------------- | --------------- |
| Component | C0001        | cnDefaultComponents | code null default components | Collection | false             | HTML, CSS, POJS |

## Dependencies to other Devices, Server, Programms, Components

none

## Databases

none

## Exposed APIs

none

## Exposed Components

### **code null checkbox**

| HTML Selector  | Technical ID | Reference Name | Official Name      | Type  | Description    |
| -------------- | ------------ | -------------- | ------------------ | ----- | -------------- |
| cn-checkbox-in | C0001-1      | cnCheckBoxIn   | code null checkbox | Input | basic checkbox |

#### Attributes and Methods

| Name                      | Type      | Description                            | Expects | returns |
| ------------------------- | --------- | -------------------------------------- | ------- | ------- |
| value between anchor tags | attribute | Defines the label for the checkbox     | any     | none    |
| checked                   | attribute | Checks the checkbox by default         | none    | none    |
| isChecked                 | method    | Gets the checked state of the checkbox | none    | boolean |

---

### **code null radio button**

| HTML Selector | Technical ID | Reference Name  | Official Name          | Type  | Description        |
| ------------- | ------------ | --------------- | ---------------------- | ----- | ------------------ |
| cn-radio-in   | C0001-2      | cnRadioButtonIn | code null radio button | Input | basic radio button |

#### Attributes and Methods

| Name               | Type   | Description                          | Expects                                              | returns               |
| ------------------ | ------ | ------------------------------------ | ---------------------------------------------------- | --------------------- |
| renderRadioButtons | method | Renders the radio buttons            | [\{label: string, value: string, checked?: boolean}] | none                  |
| getSelected        | method | Sets the value of the radio button   | none                                                 | value: string \| null |
| unselectAll        | method | Marks all radio buttons as unchecked | none                                                 | none                  |

## Notes

none

## License

[MIT License](https://github.com/code-null/cnCheckboxIn/blob/main/LICENSE)
