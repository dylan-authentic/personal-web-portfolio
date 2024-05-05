---
title: 'SSL/TLS: Securing Application Communication'
date: '2024-04-30'
tag: Engineering
---

##### Overview: Transport Layer Security
- Considered the security layer of the internet, providing **Encryption on the Web**
- TLS protocol sits at a higher level than IPSec, which is an encryption protocol at the IP layer
- TLS Headers sit between TCP communication layer and HTTP application layer, allowing TLS to be used for other communication protocols other than just HTTP
- TLS enables HTTPS. Without HTTPS, data sent over the internet can be read by anyone (bad).

###### History
- The IETF standardized TLS in the 90s, combining technology from SSL (Netscape) and PCT (Microsoft), and likely other concepts, into a standardized protocol. 
- SSL was originally created by Netscape as a solution for private communication on the internet.
- SSL and TLS are different names for the same thing. SSL was created first and then evolved into TLS after the protocol was standardized.

###### Functionality
- TLS is a cryptographic protocol that exists between two parties and defines rules and message structure for securing data.
- TLS is not specific to HTTP but it does enable HTTPS
- The TLS Handshake establishes the secure communication

__STEP 1: TCP Handshake__
- The communicating applications complete the **SYN, SYNC-ACK, ACK** TCP handshake, establishing a TCP connection

__STEP 2: Certificate Check__
- The communicating applications complete a certificate check, which includes 1) Client Hello including Supported TLS Versions and Supported Cipher Suite, 2) Server Hello including the chosen TLS Version and Cipher Suite 3) Certificate Exchange including the Public Key 4) Server Hello Done

__STEP 3: Key Exchange__
- The communicating applications exchange keys to be used during communication

__STEP 4: Encrypted Data Transmission__
- The communicating applications are set to exchange encrypted data and use their obtained keys to decode data securely

###### SSL/TLS protects data in 3 ways
1) **Confidentiality via Encryption** - Data is only accessible by client and server
2) **Integrity via Hashing** - Data is not modified between client and server
3) **Authentication via Public Keys** - Client and Server are who they say they are

###### Notes
- TLS 1.2 uses two network roundtrips, whereas TLS 1.3 uses one as an optimization
- TLS 1.2 uses Asymmetric Encryption, but other cryptographic algorithms are used in other versions, such as Diffy Hellman's
- SSL/TLS provides **Anti-Replay Protection** using sequence number logs to prevent intercepted packages from being resent over the wire
- SSL/TLS provdes **Non-Repudiation** via Integrity and Authentication where clients cannot later deny they were the ones to send particular data over the wire
- Servers are always authenticated via **Certificates**
- Certificates are issued to servers via a **Certificate Authority**, which is a governing entity that issues certificates and can be trusted by client and server.


