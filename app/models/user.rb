class User < ActiveRecord::Base
  attr_reader :password
  
  validate :valid_email_domain
  validates :email, :password_digest, :session_token, presence: true
  validates :email, uniqueness: true
  validates :password, length: { minimum: 6, allow_nil: true }

  before_validation :ensure_session_token
  
  has_one :vote

  def self.generate_session_token
    SecureRandom::urlsafe_base64(16)
  end
  
  def valid_email_domain
    unless email.ends_with?("building-blocks.com")
      errors.add(:email, "Please use a valid Building Blocks email address")
    end
  end

  def reset_session_token!
    self.session_token = User.generate_session_token
    self.save!
    self.session_token
  end

  def password=(pt)
    self.password_digest = BCrypt::Password.create(pt)
  end

  def is_password?(pt)
    @password = pt
    BCrypt::Password.new(self.password_digest).is_password?(pt) unless pt.nil?
  end

  def self.find_by_credentials(email, password)
    user = User.find_by(email: email)
    return nil if user.nil?
    user.is_password?(password) ? user : nil
  end
  
  def admin?
    self.admin
  end

  private

  def ensure_session_token
    self.session_token ||= User.generate_session_token
  end
end
