---
title: Overview
slug: /ink-macros-attributes
---

An ink! module is the module that is flagged by `#[ink::contract]` containing all the ink! definitions.
All ink! attributes are available to specify inside an ink! module:

A fully detailed documentation for `#[ink::contract]` is available in the [crate docs](https://paritytech.github.io/ink/ink_lang/attr.contract.html).

## Merging Attributes

It is possible to merge attributes that share a common flagged entity.
The example below demonstrates this for a payable message with a custom selector.

```rust
#[ink(message)]
#[ink(payable)]
#[ink(selector = "0xCAFEBABE")]
pub fn transfer(&mut self, from: AccountId, to: AccountId, value: Balance) -> Result<(), Error> {
    // actual implementation
}
```
We can also write the above ink! message definition in the following way:
```rust
#[ink(message, payable, selector = "0xCAFEBABE")]
pub fn transfer(&mut self, from: AccountId, to: AccountId, value: Balance) -> Result<(), Error> {
    // actual implementation
}
```

