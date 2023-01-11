---
templateKey: blog-post
title: Setup multiple gitlab ssh keys using 1Password
date: 2023-01-11
image: /img/sebazelonka.facts.png
description: >-
  How to setup multiple gitlab ssh keys, for different accounts.
tags:
  - Tooling
---

Today I was struggling to have SSH keys working on my personal gitlab account and the account I use at work.

To make it work, I've used [1Password SSH keys manager](https://developer.1password.com/docs/ssh/manage-keys/). To setup one account is pretty simple and I won't explain that.

The problem arised when I mixed personal and working accounts. The way I solved the problem was creating a custom HOST for my work account on gitlab, [a similar solution proposed by 1Password for multiple accounts on Github](https://developer.1password.com/docs/ssh/agent/advanced/#use-multiple-github-accounts) .

The final result looks like this:

```
Host *
    IdentityAgent "~/Library/Group Containers/2BUA8C4S2C.com.1password/t/agent.sock"

# Work GitLab
Host workgit
    HostName gitlab.com
    User git
    IdentityFile ~/.ssh/id_ed25519.pub
    IdentitiesOnly yes
```

Basically, I'm using 1Password's IdentityAgent as a global solution and I added a new `Host` named **workgit** that's is used only on projects where the origin url has changed the host value from `gitlab.com` to `workgit`

This:

```
git@gitlab.com:sebazelonka/ds.git
```

Becomes this:

```
git@workgit:sebazelonka/ds.git
```
