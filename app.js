// ==========================================================================
// ALMMATE - Application Logic
// Matches Minimalist PDF Wireframe + YouTube Shorts Knowledge Hub
// ==========================================================================

document.addEventListener('DOMContentLoaded', () => {
  // DOM Elements
  const uniGrid = document.getElementById('uniGridContainer');
  const mentorsGrid = document.getElementById('mentorsGridContainer');
  const shortsGrid = document.getElementById('shortsGridContainer');
  const searchInput = document.getElementById('uniSearchBox');
  const scannerChecklist = document.getElementById('scannerChecklist');
  const toastElement = document.getElementById('toastMsg');

  // Modals
  const askModal = document.getElementById('askStudentModal');
  const uniModal = document.getElementById('uniDeepDiveModal');
  const shortModal = document.getElementById('shortPlayerModal');
  const applyModal = document.getElementById('mentorApplyModal');

  // ==========================================================================
  // RENDER UNIVERSITIES (Matches PDF Page 2)
  // ==========================================================================
  function renderUniversities(filterText = '') {
    if (!uniGrid) return;

    let list = ALMMATE_DATA.universities;
    if (filterText.trim()) {
      const q = filterText.toLowerCase().trim();
      list = list.filter(u => 
        u.name.toLowerCase().includes(q) ||
        u.shortName.toLowerCase().includes(q) ||
        u.location.toLowerCase().includes(q)
      );
    }

    if (list.length === 0) {
      uniGrid.innerHTML = `
        <div style="grid-column: 1 / -1; text-align: center; padding: 3rem 1rem; color: var(--text-muted); background: #FFF; border-radius: var(--radius-lg); border: 1px dashed var(--border-light);">
          <p style="font-size: 1.1rem; font-weight: 600; color: var(--text-main); margin-bottom: 0.25rem;">No universities found for "${escapeHtml(filterText)}"</p>
          <p style="font-size: 0.9rem;">We only list universities where at least 2 verified enrolled mentors have passed our audit.</p>
        </div>
      `;
      return;
    }

    uniGrid.innerHTML = list.map(uni => `
      <div class="uni-clean-card" data-id="${uni.id}">
        <h3>${uni.name}</h3>
        <div class="uni-clean-meta">Online MBA · ${uni.mentorsCount} verified mentors</div>
        <button class="uni-clean-action talk-to-student-btn" data-id="${uni.id}">
          Talk to a student →
        </button>
      </div>
    `).join('');

    // Attach listeners
    uniGrid.querySelectorAll('.talk-to-student-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const uniId = e.currentTarget.getAttribute('data-id');
        openUniModal(uniId);
      });
    });
  }

  // ==========================================================================
  // RENDER MENTORS (Matches PDF Page 2 Obsidian Cards)
  // ==========================================================================
  function renderMentors() {
    if (!mentorsGrid) return;

    mentorsGrid.innerHTML = ALMMATE_DATA.mentors.map(mentor => `
      <div class="mentor-clean-card" data-id="${mentor.id}">
        <div class="mentor-clean-top">
          <div class="mentor-monogram">${mentor.initial}</div>
          <div class="mentor-clean-info">
            <h3>${mentor.name}</h3>
            <p>${mentor.universityName} · ${mentor.batch}</p>
          </div>
        </div>

        <div class="mentor-clean-quote">
          "${mentor.honestQuote}"
        </div>

        <button class="mentor-clean-action ask-mentor-direct-btn" data-id="${mentor.id}">
          Ask ${mentor.name.split(' ')[0]} a question →
        </button>
      </div>
    `).join('');

    // Attach listeners
    mentorsGrid.querySelectorAll('.ask-mentor-direct-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const mentorId = e.currentTarget.getAttribute('data-id');
        openAskModal(mentorId, null);
      });
    });
  }

  // ==========================================================================
  // RENDER YOUTUBE SHORTS (Creative Vertical Phone Frame Format)
  // ==========================================================================
  function renderShorts() {
    if (!shortsGrid) return;

    shortsGrid.innerHTML = ALMMATE_DATA.shorts.map(short => `
      <div class="short-phone-card" data-short-id="${short.id}">
        <div class="short-notch"></div>
        <div class="short-screen-area" style="background: ${short.thumbnailBg};">
          <div class="short-top-bar">
            <span class="short-tag">${short.tag}</span>
            <span class="short-duration">${short.duration}</span>
          </div>

          <div class="short-play-btn">▶</div>

          <div>
            <div class="short-title">${short.title}</div>
            <div class="short-views">🔥 ${short.views} views</div>
          </div>
        </div>
        <div style="font-size: 0.82rem; font-weight: 700; color: var(--lime); display: flex; align-items: center; justify-content: space-between;">
          <span>Watch 60s Breakdown</span>
          <span>→</span>
        </div>
      </div>
    `).join('');

    // Attach listeners
    shortsGrid.querySelectorAll('.short-phone-card').forEach(card => {
      card.addEventListener('click', (e) => {
        const shortId = e.currentTarget.getAttribute('data-short-id');
        openShortModal(shortId);
      });
    });
  }

  // ==========================================================================
  // RENDER SCANNER CHECKLIST
  // ==========================================================================
  function renderScanner() {
    if (!scannerChecklist) return;

    scannerChecklist.innerHTML = ALMMATE_DATA.redFlags.map((flag, idx) => `
      <div class="scanner-clean-item" data-idx="${idx}">
        <div class="scanner-box"></div>
        <div>
          <div class="scanner-claim-text">${flag.icon} ${flag.agentClaim}</div>
          <div class="scanner-reality-text"><strong>Reality:</strong> ${flag.reality}</div>
        </div>
      </div>
    `).join('');

    scannerChecklist.querySelectorAll('.scanner-clean-item').forEach(item => {
      item.addEventListener('click', () => {
        item.classList.toggle('checked');
        updateScannerGauge();
      });
    });
  }

  function updateScannerGauge() {
    const checkedCount = scannerChecklist.querySelectorAll('.scanner-clean-item.checked').length;
    const pill = document.getElementById('scannerRiskPill');
    const title = document.getElementById('scannerVerdictTitle');
    const desc = document.getElementById('scannerVerdictText');

    if (checkedCount === 0) {
      pill.style.color = '#10B981';
      pill.textContent = '0 FLAGS DETECTED (SAFE)';
      title.textContent = 'Check statements above to diagnose your counselor';
      desc.textContent = 'If an agent pressures you to pay a token amount today, stop and verify first.';
    } else if (checkedCount === 1) {
      pill.style.color = '#F59E0B';
      pill.textContent = '1 FLAG DETECTED (MODERATE RISK)';
      title.textContent = 'Likely a Third-Party Commission Telemarketer';
      desc.textContent = 'Ask them to email you directly from the official university domain (@university.edu.in). Brokers will refuse.';
    } else {
      pill.style.color = '#EF4444';
      pill.textContent = `${checkedCount} FLAGS DETECTED (PREDATORY SALES TRAP)`;
      title.textContent = 'High Alert: Manufactured Urgency & Misleading Guidance';
      desc.textContent = 'Do NOT transfer any registration token! Talk to a currently enrolled student on ALMMATE before proceeding.';
    }
  }

  // ==========================================================================
  // SEARCH HANDLER
  // ==========================================================================
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      renderUniversities(e.target.value);
    });
  }

  // ==========================================================================
  // MODALS LOGIC
  // ==========================================================================
  function openAskModal(mentorId = null, uniId = null) {
    if (!askModal) return;

    const uniSelect = document.getElementById('askUniSelect');
    const mentorSelect = document.getElementById('askMentorSelect');

    if (uniSelect) {
      uniSelect.innerHTML = `<option value="">Select University</option>` +
        ALMMATE_DATA.universities.map(u => `
          <option value="${u.id}" ${uniId === u.id ? 'selected' : ''}>${u.name}</option>
        `).join('');
    }

    if (mentorSelect) {
      mentorSelect.innerHTML = `<option value="">Any Verified Peer (Fastest Reply)</option>` +
        ALMMATE_DATA.mentors.map(m => `
          <option value="${m.id}" ${mentorId === m.id ? 'selected' : ''}>${m.name} (${m.universityName})</option>
        `).join('');
    }

    askModal.classList.add('active');
  }

  function openUniModal(uniId) {
    const uni = ALMMATE_DATA.universities.find(u => u.id === uniId);
    if (!uni || !uniModal) return;

    const body = document.getElementById('uniDeepDiveBody');
    body.innerHTML = `
      <button class="modal-close-btn" id="closeUniModal">✕</button>
      <div style="margin-bottom: 1.25rem;">
        <span style="font-size: 0.75rem; font-weight: 700; background: var(--lime); color: #000; padding: 0.2rem 0.6rem; border-radius: var(--radius-full);">
          ${uni.naac} · ${uni.ranking}
        </span>
        <h2 style="font-size: 1.5rem; margin-top: 0.5rem;">${uni.name}</h2>
        <p style="color: var(--text-muted); font-size: 0.88rem;">📍 ${uni.location}</p>
      </div>

      <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 0.75rem; background: #F8FAFC; border-radius: var(--radius-md); padding: 1rem; margin-bottom: 1.25rem; font-size: 0.88rem;">
        <div>
          <span style="color: var(--text-muted); font-size: 0.75rem; text-transform: uppercase;">Total Tuition Fee</span><br>
          <strong style="font-size: 1.1rem; color: #000;">${uni.feeTotal}</strong>
        </div>
        <div>
          <span style="color: var(--text-muted); font-size: 0.75rem; text-transform: uppercase;">Per Semester</span><br>
          <strong style="font-size: 1.1rem; color: #000;">${uni.feePerSem}</strong>
        </div>
        <div>
          <span style="color: var(--text-muted); font-size: 0.75rem; text-transform: uppercase;">Exam Mode</span><br>
          <strong>Online Proctored</strong>
        </div>
        <div>
          <span style="color: var(--text-muted); font-size: 0.75rem; text-transform: uppercase;">Active Mentors</span><br>
          <strong style="color: #059669;">${uni.mentorsCount} Verified</strong>
        </div>
      </div>

      <div style="margin-bottom: 1.25rem;">
        <h4 style="font-size: 0.95rem; margin-bottom: 0.35rem;">⚠️ What Brokers Won't Tell You</h4>
        <ul style="list-style: none; display: flex; flex-direction: column; gap: 0.4rem; font-size: 0.85rem; color: #4B5563;">
          ${uni.realCons.map(c => `<li>• ${c}</li>`).join('')}
        </ul>
      </div>

      <div style="margin-bottom: 1.5rem;">
        <h4 style="font-size: 0.95rem; margin-bottom: 0.35rem;">✅ Genuine Advantages</h4>
        <ul style="list-style: none; display: flex; flex-direction: column; gap: 0.4rem; font-size: 0.85rem; color: #4B5563;">
          ${uni.realPros.map(p => `<li>• ${p}</li>`).join('')}
        </ul>
      </div>

      <button class="btn-pill btn-black direct-connect-uni-btn" data-id="${uni.id}" style="width: 100%; padding: 0.85rem;">
        Ask a Current ${uni.shortName} Student →
      </button>
    `;

    uniModal.classList.add('active');

    body.querySelector('#closeUniModal').addEventListener('click', () => {
      uniModal.classList.remove('active');
    });

    body.querySelector('.direct-connect-uni-btn').addEventListener('click', (e) => {
      uniModal.classList.remove('active');
      openAskModal(null, e.currentTarget.getAttribute('data-id'));
    });
  }

  function openShortModal(shortId) {
    const short = ALMMATE_DATA.shorts.find(s => s.id === shortId);
    if (!short || !shortModal) return;

    const body = document.getElementById('shortPlayerBody');
    body.innerHTML = `
      <button class="modal-close-btn" id="closeShortModal">✕</button>
      <div style="margin-bottom: 1rem;">
        <span style="font-size: 0.75rem; font-weight: 700; background: var(--lime); color: #000; padding: 0.2rem 0.6rem; border-radius: var(--radius-full);">
          ${short.tag} · ${short.duration}
        </span>
        <h2 style="font-size: 1.35rem; margin-top: 0.5rem; line-height: 1.25;">${short.title}</h2>
        <p style="font-size: 0.82rem; color: var(--text-muted); margin-top: 0.25rem;">YouTube Shorts Knowledge Series • ${short.views} views</p>
      </div>

      <div style="background: #111419; color: #FFF; border-radius: var(--radius-lg); padding: 1.25rem; margin-bottom: 1.25rem; font-size: 0.9rem; line-height: 1.5;">
        <p style="color: #E2E8F0; margin-bottom: 0.75rem;">${short.summary}</p>
        <div style="font-size: 0.85rem; font-weight: 700; color: var(--lime); margin-bottom: 0.4rem;">
          Key Takeaways:
        </div>
        <ul style="list-style: none; display: flex; flex-direction: column; gap: 0.35rem; font-size: 0.82rem; color: #94A3B8;">
          ${short.keyTakeaways.map(t => `<li>✓ ${t}</li>`).join('')}
        </ul>
      </div>

      <button class="btn-pill btn-lime ask-peer-short-btn" style="width: 100%; padding: 0.85rem;">
        Talk to an Enrolled Student on This Topic →
      </button>
    `;

    shortModal.classList.add('active');

    body.querySelector('#closeShortModal').addEventListener('click', () => {
      shortModal.classList.remove('active');
    });

    body.querySelector('.ask-peer-short-btn').addEventListener('click', () => {
      shortModal.classList.remove('active');
      openAskModal();
    });
  }

  // ==========================================================================
  // GENERAL MODAL CLOSE HANDLERS
  // ==========================================================================
  document.querySelectorAll('.modal-close-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.modal-backdrop').forEach(m => m.classList.remove('active'));
    });
  });

  document.querySelectorAll('.modal-backdrop').forEach(backdrop => {
    backdrop.addEventListener('click', (e) => {
      if (e.target === backdrop) {
        backdrop.classList.remove('active');
      }
    });
  });

  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      document.querySelectorAll('.modal-backdrop').forEach(m => m.classList.remove('active'));
    }
  });

  // Buttons triggering Modals
  const heroAskCard = document.getElementById('heroAskCard');
  if (heroAskCard) {
    heroAskCard.addEventListener('click', () => openAskModal());
  }

  const headerJoinBtn = document.getElementById('headerJoinBtn');
  const bannerJoinBtn = document.getElementById('bannerJoinBtn');
  [headerJoinBtn, bannerJoinBtn].forEach(btn => {
    if (btn) {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        if (applyModal) applyModal.classList.add('active');
      });
    }
  });

  // Form Submissions
  const askForm = document.getElementById('askStudentForm');
  if (askForm) {
    askForm.addEventListener('submit', (e) => {
      e.preventDefault();
      askModal.classList.remove('active');
      askForm.reset();
      showToast('🛡️ Question sent to a verified enrolled peer. They will reply via WhatsApp.');
    });
  }

  const applyForm = document.getElementById('mentorApplyForm');
  if (applyForm) {
    applyForm.addEventListener('submit', (e) => {
      e.preventDefault();
      applyModal.classList.remove('active');
      applyForm.reset();
      showToast('🎉 Mentor application received! Our team will contact you for a 5-minute video call.');
    });
  }

  // Toast
  let toastTimer;
  function showToast(msg) {
    if (!toastElement) return;
    toastElement.textContent = msg;
    toastElement.classList.add('show');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => {
      toastElement.classList.remove('show');
    }, 4500);
  }

  function escapeHtml(str) {
    if (!str) return '';
    return str.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
  }

  // Initial Renders
  renderUniversities();
  renderMentors();
  renderShorts();
  renderScanner();
});
