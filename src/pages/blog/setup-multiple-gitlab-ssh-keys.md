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

The problem arised when I mixed personal and working accounts. The way I solved the problem was [similar to a solution proposed by 1Password for multiple accounts on Github](https://developer.1password.com/docs/ssh/agent/advanced/#use-multiple-github-accounts):

1. Download the public key you want to use
2. Move the file to `~/.ssh/`
3. Create a custom `Host` for my work account on gitlab on `~/.ssh/config`

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

4. On each repo that is from work account (in my case, can be anything you need) replace the original host by the custom one. The result should look something like this:

Before:

```
git@gitlab.com:sebazelonka/ds.git
```

After:

```
git@workgit:sebazelonka/ds.git
```

---

Basically, I'm using 1Password's IdentityAgent as a global solution and I added a custom `Host` named **workgit** that's is used only on projects where the origin url has changed the host value from `gitlab.com` to `workgit`
